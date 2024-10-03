const express = require("express")
const {userModel} = require("../models/user.model") 
const {roleMiddleware}  = require("../roleMiddleware/roleMiddleware")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

// Signup Route
userRouter.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body; // Capture role from the request body
    if (!name || !email || !password) {
        return res.status(400).send({ "msg": "All Fields Required!!" });
    } else {
        try {
            const hash = await bcrypt.hash(password, 5); // Hash the password
            const user = new userModel({ name, email, password: hash, role: role || 'student' }); // Default to 'student' if role is not provided
            await user.save();
            res.status(200).send({ "msg": "Registration has been done!" });
        } catch (err) {
            res.status(400).send({ "msg": err.message });
        }
    }
});


userRouter.post("/login", async (req, res) => {
  const { email, password, role } = req.body; // Get the role from request body
  if (!email || !password || !role) {
      return res.status(400).send({ "msg": "All Fields Required!!" });
  } else {
      try {
          const user = await userModel.findOne({ email });
          if (!user) {
              return res.status(404).send({ msg: 'User not found' });
          }
          
         
          if (user.role !== role) {
              return res.status(400).send({ "msg": "Choose correct role!" });
          }
          
          bcrypt.compare(password, user.password, (err, result) => {
              if (result) {
                  const token = jwt.sign({ userid: user._id }, 'vips', { expiresIn: '1h' });
                  console.log(token)
                  res.status(200).send({
                      "msg": "Login successful!",
                      "token": token,
                      "name": user.name,
                      "userid": user._id,
                      "email": user.email,
                      "role": user.role 
                  });
              } else {
                  res.status(400).send({ "msg": "Wrong Credentials" });
              }
          });
      } catch (err) {
          res.status(400).send({ "msg": err.message });
      }
  }
});


userRouter.get('/details',roleMiddleware,async(req,res)=>{
  try {
  
    const user = await userModel.findById(req.user.userid); // Assuming 'userid' is in the token
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }
    
    // Return the user details (you can customize what fields to return)
    const { name, email, role } = user; // Adjust according to your UserModel
    res.json({ name, email, role });
} catch (error) {
    res.status(500).json({ msg: 'Internal Server Error', error: error.message });
}
})

module.exports = {userRouter};

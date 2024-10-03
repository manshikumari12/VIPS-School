const express = require("express")
const {userModel} = require("../models/user.model") 

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

// Login Route (authentication)
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ "msg": "All Fields Required!!" });
    } else {
        try {
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(404).send({ msg: 'User not found' });
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userid: user._id }, 'vips', { expiresIn: '1h' });
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

module.exports = {userRouter};

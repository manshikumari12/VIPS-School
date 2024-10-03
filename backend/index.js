const express = require("express")
const {connection} = require("./db")
const {ContactRouter} = require("./routes/Contact")
const {userRouter} = require("./routes/user.router")
const {teacherRoute} = require("./routes/teacher.route")
const cors = require('cors')
const app = express()
app.use(express.json())


 
app.use(cors())

app.use("/api", ContactRouter);
app.use("/user", userRouter);
app.use("/teacher", teacherRoute);




app.listen(1111, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running at port ");
});
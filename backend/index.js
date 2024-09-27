const express = require("express")
const {connection} = require("./db")
const {ContactRouter} = require("./routes/Contact")
const cors = require('cors')
const app = express()
app.use(express.json())


 
app.use(cors())

app.use("/api", ContactRouter);


app.listen(1111, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running at port ");
});
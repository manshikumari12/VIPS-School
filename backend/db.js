const mongoose = require("mongoose")
const connection =mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.gnji0.mongodb.net/vipsdbs?retryWrites=true&w=majority&appName=Cluster0")
module.exports = {connection}
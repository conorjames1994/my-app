const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: './config/config.env'});

const connectDB = async () => {
try{
  const conn = await mongoose.connect("mongodb://localhost:27017/transactions")

  console.log(`Mongo db connected ${conn.connection.host}`.cyan.underline.bold)
}
catch(err){
 console.log(`Error: ${err.message}`.red);
 process.exit(1);
}
}

module.exports = connectDB;
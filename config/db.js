const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: './config/config.env'});

const connectDB = async () => {
try{
  const conn = await mongoose.connect("mongodb+srv://conorjames:expensestracker@cluster0.7siir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

  console.log(`Mongo db connected ${conn.connection.host}`.cyan.underline.bold)
}
catch(err){
 console.log(`Error: ${err.message}`.red);
 process.exit(1);
}
}

module.exports = connectDB;

// mongodb atlas login -conorjames, password-  expensestracker
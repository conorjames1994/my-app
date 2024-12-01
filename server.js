const express = require("express");
const dotenv= require("dotenv");
const morgan = require("morgan");
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require("cors");

connectDB()
dotenv.config({path: './config/config.env'});

const transactions = require('./routes/transactions')

const app = express();
app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV === "development"){
  app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
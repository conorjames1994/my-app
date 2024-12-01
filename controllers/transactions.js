const mongoose = require("mongoose");
const Transaction = require('../models/transaction')

//get all transactions, route - /api/vi/transactions
exports.getTransactions = async (req, res, next) => {
  try{
   const transactions = await Transaction.find();
   return res.status(200).json({
    success: true,
    count: transactions.length,
    data: transactions
   })
  } catch(err){
  return res.status(500).json({
    success: false,
    error: "server error"
  })
  }



}

//POSTtransactions, route - /api/vi/transactions
exports.addTransactions = async(req, res, next) => {
  try {
    const { text, amount } = req.body;

 const transaction = await Transaction.create(req.body);
if(transaction){        
 transaction.save().then((transaction) => {
  res.status(201).json({
  success: true,
  data: transaction
});
 }) 
}
  } catch (error) {
    if(error.name === "ValidationError"){
      const messages = Object.values(error.errors).map(val => val.message);

    res.status(400).json({
      success: false,
      error: messages
    })
    }
    else{
      return res.status(500).json({
        success: false,
        error: "server error"
      })
    }
  }
  
}


//delete transactions, route - /api/vi/transactions/:id
exports.deleteTransactions = async(req, res, next) => {
  
  try {
    const transaction = await Transaction.findById({_id: req.params.id})
    
    if(!transaction){
      return res.status(404).json({
        success: false,
        error: "no transaction found"
      })
    } else {
     await transaction.deleteOne()
    return res.status(200).json({
      success: true,
      data: {}
    })

    }
    
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      err: "server error"
    })
  }
}
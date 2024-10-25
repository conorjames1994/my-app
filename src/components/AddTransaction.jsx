import React, { useContext } from 'react'
import { useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import styles from './AddTransaction.module.css'

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const textHandler = (e) => {
    setText(e.target.value)
  }

  const amountHandler = (e) => {
    setAmount(e.target.value)
  }
 const onSubmit = (e) => {
  e.preventDefault();
  const newTransaction = {
    id: Math.floor(Math.random() * 1000),
    text,
    amount: parseInt(amount)
  }

  addTransaction(newTransaction);
  setAmount(0);
  setText('');
 }
  return (
    <div className={styles.addition}>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit} className={styles.addition}>
      <div className={styles.section}>
        <label htmlFor="text">Text</label>
        <input type="text" placeholder='Enter text...' value={text} onChange={textHandler}/>
      </div>
      <div className={styles.section}>
        <label htmlFor="amount">Amount <br /> (negative -expense, positive -income)</label>
        <input type="number" placeholder='Enter amount...' value={amount} onChange={amountHandler}/>
      </div>
      <button type='submit' style={{margin: "2rem"}}>Submit</button>
    </form>
    </div>
  )
}

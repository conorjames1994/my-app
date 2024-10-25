import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import styles from './Transaction.module.css'

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div >
      <li  style={transaction.amount < 0 ? {color: "red"} : {color: "green"}}>
        {transaction.text}
        <span>{sign}${Math.abs(transaction.amount)}</span> 
        <button onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
    </div>
  )
}

import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transaction } from './Transaction'
import styles from './TransactionList.module.css'

export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

 
  return (
    <div className={styles.transaction}>
    <h3>History</h3>
    <ul>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id}/>
      ))}
      
    </ul>
    </div>
  )
}

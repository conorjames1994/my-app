import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import styles from './balance.module.css'

export const Balance = () => {

const { transactions } = useContext(GlobalContext);
 const amounts = transactions.map(transaction => transaction.amount);
 const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className={styles.balance}>
    <h4>Your Balance</h4>
    <h1 id='balance'>{total}</h1>
    </div>
  )
}

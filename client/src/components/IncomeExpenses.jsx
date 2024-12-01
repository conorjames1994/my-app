import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import styles from './IncomeExpenses.module.css';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
   
  const amounts = transactions.map(transaction => transaction.amount);
  const incomes = amounts.filter(amount => amount > 0)
 const expenses = amounts.filter(amount => amount < 0);

 const totalIncome = incomes.reduce((acc, num) => (acc += num), 0).toFixed(2)
 const totalExpense = expenses.reduce((acc, num) => (acc += num), 0).toFixed(2)


  return (
    <div className={styles.income}>
      <div className={styles.section}>
        <h4>Income</h4>
        <p style={totalIncome > 0 ? {color: "green"} : null}>+${totalIncome}</p>
      </div>
      <div className={styles.section}>
        <h4>Expense</h4>
        <p style={totalExpense < 0 ? {color: "red"} : null}>-${Math.abs(totalExpense)}</p>
      </div>

      </div>
  )
}

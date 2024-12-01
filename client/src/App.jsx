
import { Header } from './components/header'

import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'
import styles from './App.module.css'

function App() {
  

  return (
    <div className={styles.app}>
    <GlobalProvider>
      <Header/>
      <div className={styles.container}>
       <Balance />
       <IncomeExpenses/>
       <TransactionList/>
       <AddTransaction/>
      </div>
    </GlobalProvider>
    </div>
    
  )
}

export default App

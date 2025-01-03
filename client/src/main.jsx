import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import styles from './App.module.css'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';



createRoot(document.getElementById('root')).render(
  
    <App className={styles.main}/>
  
)

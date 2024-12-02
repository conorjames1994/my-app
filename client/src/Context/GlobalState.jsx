/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import axios from 'axios';


 const initialState = {
  transactions: [],
  error: null,
  loading: true
}

//context
export const GlobalContext = createContext(initialState);

//provider, this wrapps around components in App giving all "children" access to the initialState
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  async function getTransactions(){
  const res = await axios.get('https://cjsexpensestracker.onrender.com');
   
   dispatch({
    type: "GET_TRANSACTIONS",
    payload: res.data.data
  });
  }

  async function deleteTransaction(id){
    const res = await axios.delete(`https://cjsexpensestracker.onrender.com/${id}`);
    
    if(res.data.success === true){
      dispatch(
      {
        type: "DELETE_TRANSACTION",
        payload: id
      }
    )
    }
    else{
      alert("Error: could'nt delete")
    }
  }

  async function addTransaction(transaction){
    const res = await axios.post('https://cjsexpensestracker.onrender.com', transaction);
    console.log(res)
    if(res.data.success === true){
 dispatch(
      {
        type: "ADD_TRANSACTION",
        payload: transaction
      }
    )
    }
   else{
    alert("Error: transaction not added")
   }
  }

  return (
    <GlobalContext.Provider value={{transactions: state.transactions,
      error: state.error,
      loading: state.loading,
     deleteTransaction, 
     addTransaction, 
     getTransactions
     }}>
      {children}
    </GlobalContext.Provider>
  )

}

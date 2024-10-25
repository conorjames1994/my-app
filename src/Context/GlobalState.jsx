import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'


const initialState = {
  transactions: []
}

//context
export const GlobalContext = createContext(initialState);

//provider, this wrapps around components in App giving all "children" access to the initialState
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  function deleteTransaction(id){
    dispatch(
      {
        type: "DELETE_TRANSACTION",
        payload: id
      }
    )
  }

  function addTransaction(transaction){
    dispatch(
      {
        type: "ADD_TRANSACTION",
        payload: transaction
      }
    )
  }

  return (
    <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
      {children}
    </GlobalContext.Provider>
  )

}

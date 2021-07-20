import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
/*
1: We are using Id here so every transaction has an unique id.
2: The reason for making context api is to allow whole app to access the above initialized transaction.   */

// Create Context
export const GlobalContext = createContext(initialState);
/*
1: Now we have to give access of transaction to all of our components.Thus creating a provider. 
2: Also since all components will be inside/ children of GlobalContext so we use children */
// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
/* we will also use reducer so every time we submit a transaction we like to change our state. i.e. By creating new state using reducer */

import React, { useContext } from "react";
// Import global Context
import { GlobalContext } from "../Context/GlobalState";
// Import Transactions
import { Transaction } from "./Transaction";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction}></Transaction>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

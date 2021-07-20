import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li className="plus">
      {transaction.text}
      <span>{transaction.amount}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

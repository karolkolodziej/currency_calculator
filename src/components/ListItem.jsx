import React from "react";
import "./ListItem.css";

export const ListItem = props => {
  const { title, exchangeRate, amount, exchValue } = props;
  return (
    <div className="listItem">
      <div className="listItem__title">Name of transaction: {title} </div>
      <div className="listItem__exchangeRate">
        Exchange rate: {exchangeRate} [EUR/PLN]
      </div>
      <div className="listItem__amount">Amount : {amount}[EUR]</div>
      <div className="listItem__exchValue">You spent: {exchValue}[PLN]</div>
    </div>
  );
};

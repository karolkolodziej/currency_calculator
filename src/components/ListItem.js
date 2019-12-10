import React from "react";
import "./ListItemStyle.css";

class ListItem extends React.Component {
  render() {
    return (
      <div className="listItem">
        <div className="listItem__title">
          Name of transaction: {this.props.title}{" "}
        </div>
        <div className="listItem__exchangeRate">
          Exchange rate: {this.props.exchangeRate}
        </div>
        <div className="listItem__amount">
          Amount : {this.props.amount}[EUR]
        </div>
        <div className="listItem__exchValue">
          You spent: {this.props.exchValue}[PLN]
        </div>
      </div>
    );
  }
}

export default ListItem;

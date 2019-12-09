import React from "react";
import "./ListItemStyle.css";

class ListItem extends React.Component {
  render() {
    return (
      <div className="listItem">
        <div className="listItem__title">
          Name of transaction:{this.props.title}{" "}
        </div>
        <div className="listItem__exchangeRate">
          Exchange rate:{this.props.exchangeRate}
        </div>
        <div className="listItem__amount">Amount [EUR]:{this.props.amount}</div>
        <div className="listItem__exchValue">
          You have [PLN]{this.props.exchValue}
        </div>
      </div>
    );
  }
}

export default ListItem;

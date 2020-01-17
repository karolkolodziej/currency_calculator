import React from "react";
import { connect } from "react-redux";

import { ListItem } from "./ListItem.jsx";
import { removeFromListAction } from "../actions/transactionsAction";
import "./List.css";

class List extends React.Component {
  renderList() {
    return this.props.transactions.map(item => {
      const { id, title, exchangeRate, amount, exchValue } = item;
      return (
        <div key={id}>
          <ListItem
            title={title}
            exchangeRate={exchangeRate}
            amount={amount}
            exchValue={exchValue}
          />
          <button
            className="btn negative ui button"
            onClick={() => this.props.removeFromList(item)}
          >
            DELETE
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="list__box">
        <h1>List</h1>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps, {
  removeFromList: removeFromListAction
})(List);

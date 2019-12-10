import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { removeFromListAction } from "../actions/removeFromListAction";

import "./ListStyle.css";

class List extends React.Component {
  state = { maxValue: null };

  renderList() {
    return this.props.listOfItems.map(item => {
      return (
        <div key={item.id}>
          <ListItem
            title={item.title}
            exchangeRate={item.exchangeRate}
            amount={item.amount}
            exchValue={item.exchValue}
          />
          <button
            className="negative ui button"
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
        <p>List</p>
        <div>
          <div>{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { listOfItems: state.listOfItems };
};

export default connect(mapStateToProps, {
  removeFromList: removeFromListAction
})(List);

import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { removeFromListAction } from "../actions/removeFromListAction";

class List extends React.Component {
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
    console.log(this.props.listOfItems);
    return (
      <div className="list__box">
        <p>list</p>
        <div>
          <div>{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { listOfItems: state.listOfItems };
};

export default connect(mapStateToProps, {
  removeFromList: removeFromListAction
})(List);

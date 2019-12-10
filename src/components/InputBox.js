import React from "react";
import { connect } from "react-redux";

import SingleInput from "./SingleInput";
import { saveTransactionAction } from "../actions/saveTransactionAction";
import "./InputBoxStyle.css";

class IntputBox extends React.Component {
  state = {
    title: "",
    exchangeRate: 4.5,
    amount: null,
    exchValue: null
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleExchangeRateChange = event => {
    this.setState({ exchangeRate: event.target.value });
    this.setState({ exchValue: event.target.value * this.state.amount });
  };

  handleAmountChange = event => {
    this.setState({ amount: event.target.value });
    this.setState({ exchValue: event.target.value * this.state.exchangeRate });
  };

  updatePropertyOfNewItem() {
    return (
      <div className="inputBox">
        <SingleInput
          title={"Name of transaction:"}
          placeholder={"holidays"}
          type={"text"}
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <SingleInput
          title={"Exchange rate:"}
          type={"number"}
          value={this.state.exchangeRate}
          onChange={this.handleExchangeRateChange}
        />
        <SingleInput
          title={"Enter amount:"}
          placeholder={"3500"}
          type={"number"}
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />

        <div className="inputBox__exchValue">
          You spent [PLN]:{this.state.exchValue}
        </div>

        <button
          className="inputBox__btn ui primary button"
          onClick={() =>
            this.props.saveNewTransaction(
              this.state.title,
              this.state.exchangeRate,
              this.state.amount,
              this.state.exchValue
            )
          }
        >
          SAVE
        </button>
      </div>
    );
  }

  render() {
    return <div>{this.updatePropertyOfNewItem()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    listOfItems: state.listOfItems
  };
};

export default connect(mapStateToProps, {
  saveNewTransaction: saveTransactionAction
})(IntputBox);

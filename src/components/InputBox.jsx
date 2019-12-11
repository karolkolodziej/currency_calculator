import React from "react";
import { connect } from "react-redux";

import { SingleInput } from "./SingleInput.jsx";
import { saveTransactionAction } from "../actions/transactionsAction";
import "./InputBox.css";

class IntputBox extends React.Component {
  state = {
    title: "",
    exchangeRate: 4.5,
    amount: null,
    exchangedValue: null
  };

  handleTitleChange = e => {
    const value = e.target.value;
    this.setState({ title: value });
  };

  handleExchangeRateChange = e => {
    const value = e.target.value;
    this.setState({
      exchangeRate: value,
      exchangedValue: (value * this.state.amount).toFixed(2)
    });
  };

  handleAmountChange = e => {
    const value = e.target.value;
    this.setState({
      amount: value,
      exchangedValue: (value * this.state.exchangeRate).toFixed(2)
    });
  };

  handleClick = () =>
    this.props.saveNewTransaction(
      this.state.title,
      this.state.exchangeRate,
      this.state.amount,
      this.state.exchangedValue
    );

  render() {
    const { title, exchangeRate, amount, exchangedValue } = this.state;
    return (
      <div className="inputBox">
        <SingleInput
          title="Name of transaction:"
          placeholder="holidays"
          type="text"
          value={title}
          onChange={this.handleTitleChange}
        />
        <SingleInput
          title="Exchange rate [EUR/PLN]:"
          type="number"
          value={exchangeRate}
          onChange={this.handleExchangeRateChange}
        />
        <SingleInput
          title="Enter amount [EUR]:"
          placeholder="3500"
          type="number"
          value={amount}
          onChange={this.handleAmountChange}
        />

        <div className="inputBox__exchangedValue">
          You spent [PLN]:{exchangedValue}
        </div>

        <button
          className="inputBox__btn ui primary button"
          onClick={this.handleClick}
        >
          SAVE
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps, {
  saveNewTransaction: saveTransactionAction
})(IntputBox);

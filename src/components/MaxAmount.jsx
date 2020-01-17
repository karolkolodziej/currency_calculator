import React from "react";
import { connect } from "react-redux";

import { selectMaxAmount } from "../selectors/selectMaxAmount";

class MaxAmount extends React.Component {
  render() {
    return (
      <div className="maxAmount">
        <div>Max Amount: {this.props.maxTransaction} [EUR]</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  maxTransaction: selectMaxAmount(state.transactions)
});

export default connect(mapStateToProps)(MaxAmount);

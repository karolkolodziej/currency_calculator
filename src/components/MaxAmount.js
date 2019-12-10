import React from "react";
import { connect } from "react-redux";

import { selectMaxAmount } from "../selectors/selectMaxAmount";

class MaxAmount extends React.Component {
  render() {
    return (
      <div>
        <div>Max Amount: {this.props.transactions} [EUR]</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: selectMaxAmount(state.listOfItems)
  };
};

export default connect(mapStateToProps, { selectMaxAmount })(MaxAmount);

import React from "react";
import { connect } from "react-redux";

import { calcSumHelper } from "../selectors/calcSumHelper";

class Sum extends React.Component {
  render() {
    return (
      <div>
        <div>Sum: {this.props.sum} [EUR] </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sum: calcSumHelper(state.transactions)
});

export default connect(mapStateToProps)(Sum);

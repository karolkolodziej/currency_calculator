import React from "react";
import { connect } from "react-redux";

import { CalcSumHelper } from "../helpers/CalcSumHelper";

class Sum extends React.Component {
  render() {
    return (
      <div>
        <div>Sum: {this.props.sum} [EUR] </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sum: CalcSumHelper(state.listOfItems)
  };
};

export default connect(mapStateToProps, { CalcSumHelper })(Sum);

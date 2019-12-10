import React from "react";

import "./SingleInputStyle.css";

class SingleInput extends React.Component {
  render() {
    return (
      <div className="singleInput ">
        <h4 className="singleInput__title">{this.props.title}</h4>
        <div className="singleInput__input ui right  input ">
          <input
            placeholder={this.props.placeholder}
            defaultValue={this.props.value}
            type={this.props.type}
            onChange={this.props.onChange}
            required
          />
        </div>
      </div>
    );
  }
}
export default SingleInput;

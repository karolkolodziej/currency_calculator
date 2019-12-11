import React from "react";

import "./SingleInput.css";

export const SingleInput = props => {
  const { title, placeholder, value, type, onChange } = props;
  return (
    <div className="singleInput ">
      <h4 className="singleInput__title">{title}</h4>
      <div className="singleInput__input ui right  input ">
        <input
          placeholder={placeholder}
          defaultValue={value}
          type={type}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

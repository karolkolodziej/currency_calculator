import React from "react";

import InputBox from "./components/InputBox.jsx";
import List from "./components/List.jsx";
import MaxAmount from "./components/MaxAmount.jsx";
import Sum from "./components/Sum.jsx";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="max">
          <MaxAmount />
          <Sum />
        </div>

        <InputBox />
        <div>
          <List />
        </div>
      </div>
    );
  }
}

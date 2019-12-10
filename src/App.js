import React from "react";

import InputBox from "./components/InputBox";
import List from "./components/List";
import MaxAmount from "./components/MaxAmount";
import Sum from "./components/Sum";
import "./AppStyle.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <MaxAmount />
        <Sum />
        <div>
          <InputBox />
        </div>
        <div className="list">
          <List />
        </div>
      </div>
    );
  }
}
export default App;

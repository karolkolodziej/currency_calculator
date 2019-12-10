import React from "react";
import InputBox from "./components/InputBox";
import List from "./components/List";

import "./AppStyle.css";

class App extends React.Component {
  render() {
    return (
      <div>
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

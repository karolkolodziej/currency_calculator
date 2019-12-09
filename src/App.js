import React from "react";
import InputBox from "./components/InputBox";
import List from "./components/List";

import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <InputBox />
        </div>
        <List />
      </div>
    );
  }
}
export default App;

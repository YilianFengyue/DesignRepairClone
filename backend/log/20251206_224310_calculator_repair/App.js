import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app" role="application" aria-label="Calculator">
        <div className="calculator-container">
          <div className="display-section">
            <Display value={this.state.next || this.state.total || "0"} />
          </div>
          <div className="button-section">
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}
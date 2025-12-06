import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel" role="grid" aria-label="Calculator buttons">
        <div className="button-row button-row-1" role="row" aria-label="Calculator row 1">
          <Button name="Clear" clickHandler={this.handleClick} />
          <Button name="��" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="��" clickHandler={this.handleClick} orange />
        </div>
        <div className="button-row button-row-2" role="row" aria-label="Calculator row 2">
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="��" clickHandler={this.handleClick} orange />
        </div>
        <div className="button-row button-row-3" role="row" aria-label="Calculator row 3">
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div className="button-row button-row-4" role="row" aria-label="Calculator row 4">
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div className="button-row button-row-5" role="row" aria-label="Calculator row 5">
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
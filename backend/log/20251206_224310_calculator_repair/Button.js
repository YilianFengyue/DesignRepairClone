import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    orange: false,
    wide: false,
  };

  handleClick = () => {
    if (this.props.clickHandler) {
      this.props.clickHandler(this.props.name);
    }
  };

  getAriaLabel = (name) => {
    const labels = {
      'AC': 'All Clear',
      '+/-': 'Plus Minus',
      '%': 'Percent',
      '¡Â': 'Divide',
      'Ã·': 'Divide',
      '¡Á': 'Multiply',
      'x': 'Multiply',
      '-': 'Subtract',
      '+': 'Add',
      '=': 'Equals',
      '.': 'Decimal Point'
    };
    return labels[name] || name;
  };

  render() {
    const className = [
      "component-button",
      this.props.orange && "orange",
      this.props.wide && "wide",
    ].filter(Boolean).join(" ");

    return (
      <button 
        className={className} 
        onClick={this.handleClick}
        aria-label={this.getAriaLabel(this.props.name)}
      >
        {this.props.name}
      </button>
    );
  }
}
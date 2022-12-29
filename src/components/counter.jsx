import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
    label: this.props.label,
    selected: this.props.selected,
  };

  render() {
    let badgeClasses = this.getBadgeClasses();
    let buttonClasses = this.getButtonClasses();

    return (
      <React.Fragment>
        <span className={badgeClasses}>{this.formatValue()}</span>
        <span>
          {' '}
          {this.state.label} {this.state.id}{' '}
        </span>
        <button
          className={buttonClasses}
          onClick={() => this.handleIncrement()}
        >
          +
        </button>
        <button
          className={buttonClasses}
          onClick={() => this.handleDecrement()}
        >
          -
        </button>{' '}
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          X
        </button>
      </React.Fragment>
    );
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? 'zero' : value;
  }

  handleDelete = () => {
    this.setState({ value: 0 });
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    const { value } = this.state;
    if (value) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  getBadgeClasses() {
    const { value } = this.state;
    return 'badge m-1 ' + (value ? 'bg-primary' : 'bg-warning');
  }

  getButtonClasses() {
    return 'btn btn-secondary btn-sm m-1';
  }
}

export default Counter;

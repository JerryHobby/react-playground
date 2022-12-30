import React, { Component } from 'react';

class Counter extends Component {
  render() {
    let badgeClasses = this.getBadgeClasses();
    let buttonClasses = this.getButtonClasses();

    return (
      <React.Fragment>
        <span className={badgeClasses}>{this.formatValue()}</span>
        <span>
          {' '}
          {this.props.counter.label} {this.props.counter.id}{' '}
        </span>
        <button
          className={buttonClasses}
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className={buttonClasses}
          onClick={() => this.props.onDecrement(this.props.counter.id)}
        >
          -
        </button>{' '}
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          X
        </button>
      </React.Fragment>
    );
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  }

  getBadgeClasses() {
    const { value } = this.props.counter;
    return 'badge m-1 ' + (value ? 'bg-primary' : 'bg-warning');
  }

  getButtonClasses() {
    return 'btn btn-secondary btn-sm m-1';
  }
}

export default Counter;

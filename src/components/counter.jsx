import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  render() {
    let badgeClasses = this.getBadgeClasses();
    let buttonClasses = this.getButtonClasses();

    return (
      <React.Fragment>
        <span className={badgeClasses} id='c1'>{this.formatValue()}</span>
        <span id='c2'>
          {' '}
          {this.props.counter.label} {this.props.counter.id}{' '}
        </span>
        <span id='c3'>
        <button
          className={buttonClasses}
          onClick={() => this.props.onIncrement(this.props.counter.id)}
        >
          +
        </button>
        <button
          className={buttonClasses}
          onClick={() => this.props.onDecrement(this.props.counter.id)}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-med m-1  "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          X
        </button>
                </span>
      </React.Fragment>
    );
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  }

  getBadgeClasses() {
    const { value } = this.props.counter;
    return 'badge m-0 ' + (value ? 'bg-primary' : 'bg-warning ');
  }

  getButtonClasses() {
    return 'btn btn-secondary btn-med m-1 ';
  }
}

export default Counter;

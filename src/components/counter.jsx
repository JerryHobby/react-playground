import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('Counter Constructor: ', this.props);
  }

  componentDidMount() {
    // make Ajax calls to get data
    console.log('Counter Mounted');
  }

  render() {
    const { counter, onDecrement, onIncrement, onDelete } = this.props;
    let badgeClasses = this.getBadgeClasses();
    let buttonClasses = this.getButtonClasses();
    console.log('Counter Rendered');

    return (
      <React.Fragment>
        <span className={badgeClasses} id="c1">
          {this.formatValue()}
        </span>
        <span id="c2">
          {' '}
          {counter.label} {counter.id}{' '}
        </span>
        <span id="c3">
          <button
            className={buttonClasses}
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className={buttonClasses}
            onClick={() => onDecrement(counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-med m-1  "
            onClick={() => onDelete(counter.id)}
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

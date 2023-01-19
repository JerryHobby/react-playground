import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    // console.log('Counter Constructor: ', this.props);
  }

  componentDidMount() {
    // make Ajax calls to get data
    // console.log('Counter Mounted');
  }

  componentWillUnmount() {
    // console.log('Counter Unmounted');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // console.log('counter value updated.');
      // do whatever
    }
  }

  render() {
    const { counter, onDecrement, onIncrement, onDelete } = this.props;
    let badgeClasses = this.getBadgeClasses();
    let buttonClasses = this.getButtonClasses();
    // console.log('Counter Rendered');

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={badgeClasses}>{this.formatValue()}</span>
          </div>
          <div className="col-2">
            <span className="align-bottom">
              {counter.label} {counter.id}
            </span>
          </div>
          <div className="col">
            <span className="align-bottom">
              <button
                className={buttonClasses}
                onClick={() => onIncrement(counter)}
              >
                +
              </button>
              <button
                disabled={counter.value === 0 && true}
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
          </div>
        </div>
      </React.Fragment>
    );
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  }

  getBadgeClasses() {
    const { value } = this.props.counter;
    return 'badge align-bottom m-0 ' + (value ? 'bg-primary' : 'bg-warning ');
  }

  getButtonClasses() {
    return 'btn btn-secondary btn-med m-1 ';
  }
}

export default Counter;

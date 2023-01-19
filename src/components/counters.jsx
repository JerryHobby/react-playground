import React, { Component } from 'react';
import Counter from './counter';
import './counters.css';

class Counters extends Component {
  constructor(props) {
    super(props);
    // console.log('Counters Constructor: ', this.props);
  }

  componentDidMount() {
    // make Ajax calls to get data
    // console.log('Counters Mounted');
  }

  render() {
    const { counters, onReset, onDelete, onIncrement, onDecrement } =
      this.props;
    // console.log('Counters Rendered');

    return (
      <React.Fragment>
        <button
          onClick={onReset}
          className="btn btn-primary btn-lg m-8"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10, selected: true, label: 'First' },
      { id: 2, value: 20, selected: true, label: 'Second' },
      { id: 3, value: 30, selected: true, label: 'Third' },
      { id: 4, value: 40, selected: true, label: 'Fourth' },
    ],
  };

  handleIncrement = (counter) => {
    const value = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleDecrement = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              counter={counter}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;

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

  handleDelete = (counterId) => {
    console.log('Delete Event', counterId);

    //this.state.counters = this.state.counters.filter(id: counterId)
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              selected={counter.selected}
              label={counter.label}
              onDelete={this.handleDelete}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;

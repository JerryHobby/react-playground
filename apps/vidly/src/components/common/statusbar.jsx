import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatusBar extends Component {
  constructor(props) {
    super(props);
    // console.log('StatusBar Constructor: ', this.props);
  }
  componentDidMount() {
    // make Ajax calls to get data
    // console.log('StatusBar Mounted');
  }

  render() {
    const { items } = this.props;
    // console.log('StatusBar Rendered');
    // console.log(items);

    return (
      <div className="row m-0 p-0">
        {items.map((item) => (
          <div
            key={item.label}
            className="col m-0 pl-1 pr-1 text-info bg-dark border-end border-white"
          >
            {item.label}
            {item.label.length ? ': ' : ''}
            {item.value}
          </div>
        ))}
      </div>
    );
  }
}

export default StatusBar;

StatusBar.propTypes = {
  items: PropTypes.array.isRequired,
};

import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log('NavBar Constructor: ', this.props);
  }
  componentDidMount() {
    // make Ajax calls to get data
    console.log('NavBar Mounted');
  }

  render() {
    const { totalCounters, totalItems } = this.props;
    console.log('NavBar Rendered');

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Home{' '}
          <span className="badge badge-pill bg-primary">
            Counters: {totalCounters}
          </span>
          <span className="badge badge-pill bg-secondary">
            Items: {totalItems}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;

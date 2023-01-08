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
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-item nav-link"
              href="#"
              onClick={() => window.location.reload()}
            >
              Reload
            </a>
            <a className="nav-item nav-link" href="#">
              Unused
            </a>
            <a className="nav-item nav-link disabled" href="#">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

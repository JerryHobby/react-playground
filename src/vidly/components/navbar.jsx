import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  const navClass = 'nav nav-tabs nav-pills mb-3 m-2';
  const linkClass = 'nav-item nav-link';
  return (
    <React.Fragment>
      <nav className="vidlynavbar">
        <div
          className={navClass}
          id="nav-tab"
          role="tablist"
        >
          <NavLink
            className={linkClass}
            id="nav-home-tab"
            data-toggle="tab"
            to="/vidly/"
            role="tab"
            aria-controls="nav-home"
            aria-selected="trfalseue"
          >
            Home
          </NavLink>
          <NavLink
            className={linkClass}
            id="nav-movies-tab"
            data-toggle="tab"
            to="movies"
            role="tab"
            aria-controls="nav-movies"
            aria-selected="false"
          >
            Movies
          </NavLink>
          <NavLink
            className={linkClass}
            id="nav-rentals-tab"
            data-toggle="tab"
            to="rentals"
            role="tab"
            aria-controls="nav-rentals"
            aria-selected="false"
          >
            Rentals
          </NavLink>
          <NavLink
            className={linkClass}
            id="nav-customers-tab"
            data-toggle="tab"
            to="customers"
            role="tab"
            aria-controls="nav-customers"
            aria-selected="false"
          >
            Customers
          </NavLink>
        </div>
      </nav>
      <div
        className="tab-content"
        id="nav-tabContent"
      >
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        ></div>
        <div
          className="tab-pane fade"
          id="nav-movies"
          role="tabpanel"
          aria-labelledby="nav-movies-tab"
        ></div>
        <div
          className="tab-pane fade"
          id="nav-rentals"
          role="tabpanel"
          aria-labelledby="nav-rentals-tab"
        ></div>
        <div
          className="tab-pane fade"
          id="nav-customers"
          role="tabpanel"
          aria-labelledby="nav-customers-tab"
        ></div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const rowClass = 'row bg-secondary';
  const colClass = 'col';
  const linkClass = 'text-decoration-none link-light';
  return (
    <div className={rowClass}>
      <div className={colClass}>
        <Link
          to="/vidly"
          className={linkClass}
        >
          Home
        </Link>
      </div>
      <div className={colClass}>
        <Link
          to="movies"
          className={linkClass}
        >
          Movies
        </Link>
      </div>
      <div className={colClass}>
        <Link
          to="moviestable"
          className={linkClass}
        >
          Movies Table
        </Link>
      </div>
      <div className={colClass}>
        <Link
          to="rentals"
          className={linkClass}
        >
          Rentals
        </Link>
      </div>
      <div className={colClass}>
        <Link
          to="customers"
          className={linkClass}
        >
          Customers
        </Link>
      </div>

      <div className={colClass}>
        <Link
          to="movieform"
          className={linkClass}
        >
          Movie Form
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

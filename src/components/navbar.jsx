import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  const navClass = 'nav nav-tabs bg-secondary';
  const linkClass = 'nav-item nav-link text-black';
  return (
    <React.Fragment>
      <nav>
        <div
          className={navClass}
          id="nav-tab"
          role="tablist"
        >
          <NavLink
            className={linkClass}
            id="nav-home-tab"
            data-toggle="tab"
            to="/vidly"
            role="tab"
            aria-controls="nav-vidly"
            aria-selected="trfalseue"
          >
            Vidly
          </NavLink>
          <NavLink
            className={linkClass}
            id="nav-calljournal-tab"
            data-toggle="tab"
            to="calljournal"
            role="tab"
            aria-controls="nav-calljounal"
            aria-selected="false"
          >
            Call Journal
          </NavLink>
        </div>
      </nav>
      <div
        className="tab-content"
        id="nav-tabContent"
      >
        <div
          className="tab-pane fade show active"
          id="nav-vidly"
          role="tabpanel"
          aria-labelledby="nav-vidley-tab"
        ></div>
        <div
          className="tab-pane fade"
          id="nav-calljounal"
          role="tabpanel"
          aria-labelledby="nav-calljounal-tab"
        ></div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;

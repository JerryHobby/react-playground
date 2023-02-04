import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const rowClass = 'row bg-primary';
  const colClass = 'col';
  const linkClass = 'text-decoration-none link-light';
  return (
    <div className={rowClass}>
      <div className={colClass}>
        <Link to="/" className={linkClass}>Home</Link>
      </div>
      <div className={colClass}>
        <Link to="/products" className={linkClass}>Products</Link>
      </div>
      <div className={colClass}>
        <Link to="/products/3/testvar='hello world'" className={linkClass}>Sample Product</Link>
      </div>
      <div className={colClass}>
        <Link to="/posts/2018/12?a=1&b=2" className={linkClass}>Posts</Link>
      </div>
      <div className={colClass}>
        <Link to="/admin" className={linkClass}>Admin</Link>
      </div>
      <div className="col-4" />
    </div>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const rowClass = 'row bg-light'
  const colClass = 'col link-light'
  return (
    <div className={rowClass}>
      <div className={colClass}>
        <Link to="/">Home</Link>
      </div>
      <div className={colClass}>
        <Link to="/products">Products</Link>
      </div>
      <div className={colClass}>
        <Link to="/products/3/testvar='hello world'">Sample Product</Link>
      </div>
      <div className={colClass}>
        <Link to="/posts/2018/12?a=1&b=2">Posts</Link>
      </div>
      <div className={colClass}>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default NavBar;

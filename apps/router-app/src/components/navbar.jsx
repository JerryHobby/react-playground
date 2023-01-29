import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/products/3/testvar='hello world'">Sample Product</Link>
      </li>
      <li>
        <Link to="/posts/2018/12?a=1&b=2">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;

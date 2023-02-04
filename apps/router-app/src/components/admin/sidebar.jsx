import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const rowClass = 'navbar navbar-expand-sm navbar-light bg-light';
  const colClass = 'col';
  const linkClass = 'text-decoration-none link-secondary';
  
  return (
    <div className={rowClass}>
      <div className={colClass}>
        <Link to="/admin/posts" className={linkClass}>Posts</Link>
      </div>
      <div className={colClass}>
        <Link to="/admin/users" className={linkClass}>Users</Link>
      </div>
      <div className="col-10" />
    </div>
  );
};
export default SideBar;

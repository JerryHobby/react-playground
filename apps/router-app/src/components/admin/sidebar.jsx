import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const rowClass = 'navbar navbar-expand-sm navbar-light bg-light';
  const colClass = 'col-1 collapse navbar-collapse link-light';
  return (
    <div className={rowClass}>
      <div className={colClass}>
        <Link to="/admin/posts">Posts</Link>
      </div>
      <div className={colClass}>
        <Link to="/admin/users">Users</Link>
      </div>
      <div className="col-10" />
    </div>
  );
};
export default SideBar;

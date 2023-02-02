import React from 'react';
import SideBar from './sidebar';
import Users from './users';
import Posts from './posts';
import { Routes, Route, Navigate } from 'react-router-dom';

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Routes>
        <Route
          path="/admin/users"
          element={<Users />}
        />
        <Route
          path="/admin/posts"
          element={<Posts />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;

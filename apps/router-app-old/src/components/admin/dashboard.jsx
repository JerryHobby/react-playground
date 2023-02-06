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
          path="/users"
          element={<Users />}
        />
        <Route
          path="/posts"
          element={<Posts />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;

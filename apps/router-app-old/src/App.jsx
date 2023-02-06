 import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Routes>
            <Route
              path="/products/:id/:testvar?"
              element={<ProductDetails {...this.props} />}
            />
            <Route
              path="/products"
              element={
                <Products
                  {...this.props}
                  sortBy="newest"
                />
              }
            />
            <Route
              path="/posts/:year?/:month?"
              element={<Posts {...this.props} />}
            />
            <Route
              path="/posts"
              element={<Posts />}
            />
            <Route
              path="/admin/*"
              element={<Dashboard />}
            />
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/messages"
              element={<Navigate to="/posts" />}
            />
            <Route
              path="*"
              element={<NotFound {...this.props} />}
              //element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

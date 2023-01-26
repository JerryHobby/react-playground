import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
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
              path="/products/:id"
              // element={(props) => (
              //   <ProductDetails
              //     {...props}
              //     title={`Props through render`}
              //   />
              // )}
              element={<ProductDetails />}
            />
            <Route
              path="/products"
              element={<Products sortBy="newest" />}
            />
            <Route
              path="/posts/:year/:month"
              element={<Posts />}
            />
            <Route
              path="/posts"
              element={<Posts />}
            />
            <Route
              path="/admin"
              element={<Dashboard />}
            />
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

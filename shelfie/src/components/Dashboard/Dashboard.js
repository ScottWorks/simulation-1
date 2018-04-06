import React, { Component } from 'react';
import Product from '../Product/Product';
import '../../App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dashboard</h1>
        <Product />
      </div>
    );
  }
}

export default Dashboard;

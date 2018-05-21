import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import '../../App.css';

class Dashboard extends Component {
  // constructor() {
  //   super();
  // }

  // componentWillUpdate() {
  //   this.props.getInventory();
  // }

  // removeProduct() {
  //   axios.delete(`/api/inventory/${id}`);
  // }

  render() {
    const { inventory } = this.props;

    const displayList = inventory.map((elem, i) => {
      return <Product key={i} item={elem} />;
    });
    return <div className="App">{displayList}</div>;
  }
}

export default Dashboard;

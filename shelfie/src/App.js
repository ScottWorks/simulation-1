import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };

    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get('/api/inventory').then((nodeRes) => {
      this.setState({
        inventory: nodeRes.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="dash-form-container">
          <Form getInventory={this.getInventory} />
          <Dashboard
            inventory={this.state.inventory}
            getInventory={this.getInventory}
          />
        </div>
      </div>
    );
  }
}

export default App;

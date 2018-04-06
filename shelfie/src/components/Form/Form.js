import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      name: '',
      price: ''
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.removeChanges = this.removeChanges.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  componentWillUpdate() {
    this.props.getInventory();
  }

  handleChanges() {
    this.setState({
      img: this.refs.img.value,
      name: this.refs.name.value,
      price: this.refs.price.value
    });
  }

  removeChanges() {
    this.setState({
      img: '',
      name: '',
      price: ''
    });
  }

  addProduct() {
    const { img, name, price } = this.state;

    axios.post('/api/product', { img, name, price }).then((nodeRes) => {
      this.setState({
        img: '',
        name: '',
        price: ''
      });
    });
  }

  render() {
    const { img, name, price } = this.state;
    return (
      <div className="form-container">
        <div className="form-image">{/* <img src= alt="{name}" /> */}</div>
        <div className="form-input">
          <label>
            Image URL:{' '}
            <input
              id="img"
              type="url"
              ref="img"
              value={img}
              onChange={this.handleChanges}
            />
          </label>
          <label>
            Product Name:{' '}
            <input
              id="name"
              type="text"
              ref="name"
              value={name}
              maxLength="25"
              onChange={this.handleChanges}
            />
          </label>
          <label>
            Price:{' '}
            <input
              id="price"
              type="text"
              ref="price"
              value={price}
              onChange={this.handleChanges}
            />
          </label>
        </div>
        <div className="form-buttons">
          <button onClick={this.removeChanges}>Cancel</button>
          <button onClick={this.addProduct}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;

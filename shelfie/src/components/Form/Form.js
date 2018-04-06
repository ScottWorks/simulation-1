import React, { Component } from 'react';
import '../../App.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: '',
      productName: '',
      price: 0
    };

    this.handleImgURL = this.handleImgURL.bind(this);
  }

  handleChange() {
    this.setState({
      imageURL: this.refs.imageURL.value,
      productName: this.refs.productName.value,
      p: this.refs.productName.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
            Image URL: <input id="imageURL" type="url" ref="imageURL" />
          </label>
          <label>
            Product Name:{' '}
            <input id="productName" type="text" ref="productName" />
          </label>
          <label>
            Price: <input id="price" type="text" ref="price" />
          </label>
        </div>
        <div>
          <button>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;

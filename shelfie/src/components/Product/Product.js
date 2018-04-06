import React from 'react';

function Product(props) {
  const { name, price, img } = props.item;

  return (
    <div className="item-container">
      <img src={img} alt={name} height="250" width="300" />
      <div className="item-text">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Product;

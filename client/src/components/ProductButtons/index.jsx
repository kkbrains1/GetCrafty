import React from 'react';
import formatPrice from './../../helpers/format-price';

const ProductButtons = props => {
  //console.log(props);
  return (
    <div>
      <button onClick={() => props.changeQuantity(props.quantity - 1)}>-</button>
      <span>Qty {props.quantity}</span>
      <button onClick={() => props.changeQuantity(props.quantity + 1)}>+</button>
      <em>{formatPrice(props.product.price)}</em>
    </div>
  );
};

export default ProductButtons;

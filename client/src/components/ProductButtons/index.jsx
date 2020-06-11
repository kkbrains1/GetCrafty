import React from 'react';
import formatPrice from './../../helpers/format-price';

const ProductButtons = props => {
  //console.log(props);
  return (
    <div>
      <button onClick={() => props.changeQuantity(props.quantity - 1)}>-</button>
      <span>
        <bold>{props.quantity}</bold>
      </span>
      <button onClick={() => props.changeQuantity(props.quantity + 1)}>+</button>
      <span>Add for</span>
      <em>{formatPrice(props.product.price)}</em>
    </div>
  );
};

export default ProductButtons;

/* 
<span>
Add {props.product.name} for <em>{formatPrice(props.product.price)}</em>
</span> */

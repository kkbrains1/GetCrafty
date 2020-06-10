import React from 'react';

//import { Link } from 'react-router-dom';

const ProductButtons = props => {
  //console.log(props);
  return (
    <div>
      <button onClick={() => props.changeQuantity(props.quantity - 1)}>-</button>
      <span>Qty {props.quantity}</span>
      <button onClick={() => props.changeQuantity(props.quantity + 1)}>+</button>
    </div>
  );
};

export default ProductButtons;

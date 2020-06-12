import React from 'react';
import './style.scss';

import formatPrice from '../../../helpers/format-price';

function Checkout(props) {
  return (
    <div className="components">
      <div className="components-media">
        <img src={props.photo} alt={props.name} />
      </div>
      <div className="components-col">
        <div className="components-body">
          <span>{props.name} </span>
          {<em>{formatPrice(props.price)}</em>}
        </div>
        <div className="components-actions">
          <button onClick={() => props.changeQuantity(props.quantity - 1)}>-</button>
          <button onClick={() => props.changeQuantity(props.quantity + 1)}>+</button>
          <span>Qty. {props.quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

import React, { Component } from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

import Checkout from '../../components/ShoppingBasketCompView/Checkout';


class ShoppingBasketView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  render() {
    //console.log('this =>', this.props);
    return (
      <div>
        <h1>Shopping Basket</h1>
        {this.props.shoppingBasket.map((item) => (
          <Checkout
            {...item.product}
            quantity={item.quantity}
            changeQuantity={(quantity) => this.props.changeProductQuantity(item.product, quantity)}
          />
        ))}
        
        <Link to="/checkout">Proceed to Checkout</Link>
      </div>
    );
  }
}

export default ShoppingBasketView;

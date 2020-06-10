import React, { Component } from 'react'
import './style.scss';

import { Link } from 'react-router-dom';

import Brewingkit from './../../components/ShoppingBasketCompView/Brewingkit';

class ShoppingBasketView extends Component {
  // constructor(props){
  // super(props);
  // this.state = {}
  // console.log(props)
  // }
  
  render() {
    console.log('this =>',this.props)
    return (
      <div>
        <h1>Shopping Basket</h1>
        {this.props.shoppingBasket.map(item => (
          <Brewingkit 
            {...item.brewingkit}
          />
        ))}
        <Link to="/checkout">Proceed to Checkout</Link>
      </div>
    )
  }
}

export default ShoppingBasketView;

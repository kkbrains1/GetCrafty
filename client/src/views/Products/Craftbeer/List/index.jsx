import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { listCraftbeers } from '../../../../services/craftbeer';
import ProductButtons from './../../../../components/ProductButtons';
import calcQuantity from './../../../../helpers/update-quantity';
import formatPrice from './../../../../helpers/format-price';

class CraftbeerListView extends Component {
  constructor() {
    super();
    this.state = {
      craftbeers: []
    };
  }

  loadCraftbeers() {
    listCraftbeers()
      .then(craftbeers => {
        this.setState({
          craftbeers
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadCraftbeers();
  }

  render() {
    let shoppingBasket = this.props.shoppingBasket;

    return (
      <div className="beer__list">
        <h1>OUR CRAFTBEERS</h1>
        {this.state.craftbeers.map(product => (
          <div className="beer__card" key={product._id}>
            <Link to={`/products/craftbeer/${product._id}`}>
              <div className="beer__media">
                <img src={product.photo} alt={product.name} />
              </div>
              <div className="beer__body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </Link>
            <div className="beer__buttons">
              <ProductButtons
                {...this.props}
                product={product}
                quantity={calcQuantity(shoppingBasket, product)}
                shoppingBasket={this.props.shoppingBasket}
                changeQuantity={quantity => this.props.changeProductQuantity(product, quantity)}
                //changeQuantity={this.props.changeProductQuantity}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CraftbeerListView;

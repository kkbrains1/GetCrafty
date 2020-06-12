import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { listBrewingkits } from '../../../../services/brewingkit';
import ProductButtons from './../../../../components/ProductButtons';
import calcQuantity from './../../../../helpers/update-quantity';

class BrewingkitListView extends Component {
  constructor() {
    super();
    this.state = {
      brewingkits: []
    };
  }

  loadBrewingkits() {
    listBrewingkits()
      .then(brewingkits => {
        this.setState({
          brewingkits
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadBrewingkits();
  }

  render() {
    let shoppingBasket = this.props.shoppingBasket;
    return (
      <div className="product__list">
        <h1>BREWING MATERIAL</h1>
        {this.state.brewingkits.map(product => (
          <div className="product__card" key={product._id}>
            <Link to={`/products/brewingkit/${product._id}`}>
              <div className="product__media">
                <img src={product.photo} alt={product.name} />
              </div>
              <div className="product__body">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
              </div>
            </Link>
            <div className="product__buttons">
              <ProductButtons
                {...this.props}
                product={product}
                quantity={calcQuantity(shoppingBasket, product)}
                shoppingBasket={this.props.shoppingBasket}
                changeQuantity={quantity => this.props.changeProductQuantity(product, quantity)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BrewingkitListView;

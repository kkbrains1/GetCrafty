import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { listBrewingkits } from '../../../../services/brewingkit';
import ProductButtons from './../../../../components/ProductButtons';

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
    let quantity = 0;
    return (
      <div className="beer__list">
        <h1>BREWING KITS</h1>
        {this.state.brewingkits.map(product => (
          <div className="beer__card">
            <Link to={`/products/brewingkit/${product._id}`} key={product._id}>
              <div className="beer__media">
                <img src={product.photo} alt={product.name} />
              </div>
              <div className="beer__body">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
              </div>
            </Link>
            <div className="beer__buttons">
              <ProductButtons
                {...this.props}
                product={product}
                quantity={quantity}
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

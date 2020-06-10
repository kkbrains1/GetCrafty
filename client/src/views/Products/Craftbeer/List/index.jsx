import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { listCraftbeers } from '../../../../services/craftbeer';
import ProductButtons from './../../../../components/Products/ProductButtons';

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
    let quantity = 0;
    return (
      <div className="beer__list">
        <h1>BEER</h1>
        {this.state.craftbeers.map(product => (
          <div className="beer__card">
            <Link to={`/products/craftbeer/${product._id}`} key={product._id}>
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

export default CraftbeerListView;

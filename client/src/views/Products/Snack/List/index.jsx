import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { listSnacks } from '../../../../services/snack';
import ProductButtons from './../../../../components/ProductButtons';

class SnackListView extends Component {
  constructor() {
    super();
    this.state = {
      snacks: []
    };
  }

  loadSnacks() {
    listSnacks()
      .then(snacks => {
        this.setState({
          snacks
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadSnacks();
  }

  render() {
    let quantity = 0;
    return (
      <div className="beer__list">
        <h1>SNACKS</h1>
        {this.state.snacks.map(product => (
          <div className="beer__card">
            <Link to={`/products/snack/${product._id}`} key={product._id}>
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

export default SnackListView;

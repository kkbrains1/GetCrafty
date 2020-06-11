import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './style.scss';

import { singleSnack } from '../../../../services/snack';
import ProductButtons from './../../../../components/ProductButtons';
import calcQuantity from './../../../../helpers/update-quantity';

class SnackSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snack: null
    };
  }

  loadSnack() {
    //console.log(this.props)
    singleSnack(this.props.match.params.id)
      .then(snack => {
        this.setState({
          snack
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadSnack();
  }

  render() {
    let product = this.state.snack;
    let shoppingBasket = this.props.shoppingBasket;

    return (
      <div>
        {this.state.snack && (
          <div className="product__page">
            <div className="beer">
              <h1>{product.name}</h1>
              <img src={product.photo} alt={product.name} className="product__media" />
              <div className="product__buttons">
                <span>Alc {product.abv} %</span>
                <span>IBU {product.ibu}</span>
                <ProductButtons
                  {...this.props}
                  product={product}
                  quantity={calcQuantity(shoppingBasket, product)}
                  shoppingBasket={this.props.shoppingBasket}
                  changeQuantity={quantity => this.props.changeProductQuantity(product, quantity)}
                />
              </div>
              <p>{product.description}</p>
            </div>
            <hr />
            <h2>THIS PAIRS AWESOMELY WITH...</h2>
            <ul>
              <li>LIST BEERS</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default SnackSingleView;

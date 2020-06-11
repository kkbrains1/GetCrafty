import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { singleCraftbeer } from '../../../../services/craftbeer';
import ProductButtons from './../../../../components/ProductButtons';
import calcQuantity from './../../../../helpers/update-quantity';

class CraftbeerSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      craftbeer: null
    };
  }

  loadCraftbeer() {
    //console.log(this.props)
    singleCraftbeer(this.props.match.params.id)
      .then(craftbeer => {
        //console.log(this.props);
        this.setState({
          craftbeer
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadCraftbeer();
  }

  render() {
    let product = this.state.craftbeer;
    let shoppingBasket = this.props.shoppingBasket;

    return (
      <div>
        {this.state.craftbeer && (
          <div className="beer__page">
            <div className="beer__media">
              <h1>{product.name}</h1>
              <img src={product.photo} alt={product.name} className="beer__media" />
              <div className="beer__buttons">
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
            <h2>BEST PAIRED WITH...</h2>
            <ul>
              {product.food_pairing.map(foodItem => (
                <Link to="#" key={Date.now() * Math.random()}>
                  <li>{foodItem}</li>
                </Link>
              ))}
            </ul>
            <h2>FANCY BREWING SOME? These are our ingredients...</h2>
            <h4>Malts:</h4>
            <ul>
              {product.ingredients.malt.map(malt => (
                <Link to="#" key={Date.now() * Math.random()}>
                  <li>{malt.name}</li>
                  <span>{malt.amount.value}</span>
                  <span>{malt.amount.unit}</span>
                </Link>
              ))}
            </ul>
            <h4>Hops:</h4>
            <ul>
              {product.ingredients.hops.map(hops => (
                <Link to="#" key={Date.now() * Math.random()}>
                  <li>{hops.name}</li>
                  <span>{hops.amount.value}</span>
                  <span>{hops.amount.unit}</span>
                </Link>
              ))}
            </ul>
            <h4>Yeast:</h4>
            <ul>
              <li>{product.ingredients.yeast}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default CraftbeerSingleView;

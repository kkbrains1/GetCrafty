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
          <div className="product__page">
            <div className="product__info">
              <h1>{product.name}</h1>
              <img src={product.photo} alt={product.name} className="z" />
              <div className="product__small-details">
                <span>Alc {product.abv} % </span>
                <span>IBU {product.ibu}</span>
              </div>
              <div className="product__buttons-single">
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
                <Link to={`/products/${foodItem}`} key={Date.now() * Math.random()}>
                  <li>{foodItem}</li>
                </Link>
              ))}
            </ul>
            <h2>FANCY BREWING SOME? </h2>
            <h3>Try adding these to your kit...</h3>

            <h4>Malts:</h4>
            <ul>
              {product.ingredients.malt.map(malt => (
                <Link to={`/products/${malt.name}`} key={Date.now() * Math.random()}>
                  <li>
                    {malt.name}:{' '}
                    <em>
                      {' '}
                      {malt.amount.value} {malt.amount.unit}{' '}
                    </em>
                  </li>
                </Link>
              ))}
            </ul>
            <h4>Hops:</h4>
            <ul>
              {product.ingredients.hops.map(hops => (
                <Link to={`/products/${hops.name}`} key={Date.now() * Math.random()}>
                  <li>
                    {hops.name}:{' '}
                    <em>
                      {' '}
                      {hops.amount.value} {hops.amount.unit}{' '}
                    </em>
                  </li>
                </Link>
              ))}
            </ul>
            <h4>Yeast:</h4>
            <ul>
              <Link to={`/products/${product.ingredients.yeast}`} key={Date.now() * Math.random()}>
                <li>{product.ingredients.yeast}</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default CraftbeerSingleView;

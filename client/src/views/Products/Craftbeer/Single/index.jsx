import React, { Component } from 'react';
import './style.scss';

import { singleCraftbeer } from '../../../../services/craftbeer';
import CraftbeerSingle from './../../../../components/Products/CraftbeerSingle';

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
    let quantity = 0;
    let product = this.state.craftbeer
    return (
      <div>
        {this.state.craftbeer && (
          <CraftbeerSingle
            {...this.props}
            craftbeer={this.state.craftbeer}
            quantity={quantity}
            shoppingBasket={this.props.shoppingBasket}
            changeQuantity={quantity => this.props.changeProductQuantity(product, quantity)}
          />
        )}
      </div>
    );
  }
}

export default CraftbeerSingleView;

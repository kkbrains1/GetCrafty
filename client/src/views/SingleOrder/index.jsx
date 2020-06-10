import React, { Component } from 'react';
import './style.scss';

import { loadOrder } from '../../services/orders';

import formatPrice from './../../helpers/format-price';

class SingleOrderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      order: null
    };
  }
  loadSingleOrder() {
    const id = this.props.match.params.id;

    loadOrder(id)
      .then((order, products) => {
        console.log(order, products);
        this.setState({
          loaded: true,
          order
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadSingleOrder();
  }

  render() {
    const order = this.state.order;
    return (
      <div>
        {!this.state.loaded && (
          <>
            <span>Loading...</span>
          </>
        )}
        {order && (
          <>
            <table>
              <tr>
                <th>Product</th>
                <th>Type</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>

              {order.basket.map((item) => {
                const Price = formatPrice(item.product.price);
                const quantity = item.quantity;
                let subtotal = {
                  amount: item.product.price.amount * item.quantity,
                  currency: item.product.price.currency
                };
                subtotal = formatPrice(subtotal);
                return (
                  <tr>
                    <td>{item.product.name}</td>
                    <td>{item.product.type}</td>
                    <td>{Price}</td>
                    <td>{quantity}</td>
                    <td>{subtotal}</td>
                  </tr>
                );
              })}
            </table>
            <h4> Total ammount : {formatPrice(order.total)}</h4>
            <h5>order ID: {order._id}</h5>
          </>
        )}
      </div>
    );
  }
}

export default SingleOrderView;

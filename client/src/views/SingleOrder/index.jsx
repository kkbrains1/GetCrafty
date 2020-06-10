import React, { Component } from 'react';
import './style.scss';

import { loadOrder } from '../../services/orders';

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
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {order.basket.map((item) => {
                return <p>{item._id}</p>;
              })}
              {/* {order.basket.map((item) => {
              {order.basket.map(item => {
                return (
                  <tr>
                    <td>{item.details.name}</td>
                    <td>
                      {item.details.price.amount}
                      {item.details.price.currency}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {item.quantity * item.details.price.amount}
                      {item.details.price.currency}
                    </td>
                  </tr>
                );
              })} */}
            </table>
            <h4>
              {' '}
              Total ammount : {order.total.amount}
              {order.total.currency}
            </h4>
            <h5>order ID: {order._id}</h5>
          </>
        )}
      </div>
    );
  }
}

export default SingleOrderView;

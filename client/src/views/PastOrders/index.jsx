import React, { Component } from 'react';
import './style.scss';

import { listOrders } from '../../services/orders';

class PastOrdersView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      orders: []
    };
  }

  loadOrders() {
    listOrders()
      .then((orders, products) => {
        console.log(orders);
        console.log(products);
        this.setState({
          loaded: true,
          orders
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadOrders();
  }

  render() {
    return (
      <div>
        {!this.state.loaded && <span>Loading...</span>}
        <h1>Past Orders List</h1>
        {this.state.orders &&
          this.state.orders.map((order) => {
            return (
              <>
                <div>
                  <p>Date ordered</p>
                  <p>
                    <strong>{order.dateCreated}</strong>
                  </p>
                </div>
                <div>
                  <p>Value</p>
                  <p>
                    <strong>
                      {order.total.amount} {order.total.currency}
                    </strong>
                  </p>
                </div>
              </>
            );
          })}
        <button>View order</button>
      </div>
    );
  }
}

export default PastOrdersView;

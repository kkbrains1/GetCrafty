import React, { Component } from 'react';
import './style.scss';
import formatPrice from './../../helpers/format-price';
import formatDate from './../../helpers/format-date';
import { listOrders } from '../../services/orders';
import { Link } from 'react-router-dom';
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
    //console.log(this.state.orders);
    return (
      <div>
        {!this.state.loaded && <span>Loading...</span>}
        <h1 className="title">Past Orders List</h1>
        {this.state.orders &&
          this.state.orders.map((order) => {
            return (
              <>
                <div className="card">
                  <div className="date">
                    <p>Date ordered</p>
                    <p>
                      <strong>{formatDate(order.dateUpdated)}</strong>
                    </p>
                  </div>
                  <div className="value">
                    <p>Value</p>
                    <p>
                      <strong>{formatPrice(order.total)}</strong>
                    </p>
                  </div>

                  <div>
                    <button className="button">
                      <Link to={`/order/${order._id}`}>View order</Link>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    );
  }
}

export default PastOrdersView;

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
      .then((order) => {
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
              {/* <tr>
                <td>{order.basket}</td>
                <td>{order.basket.price}</td>
                <td>{order.basket.quantity}</td>
                <td>{order.total}</td>
              </tr>
              <tr>
                <td>{order.totalPrice}</td>
              </tr> */}
              <h5>{order._id}</h5>
            </table>
          </>
        )}
      </div>
    );
  }
}

export default SingleOrderView;

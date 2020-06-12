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
        //console.log(order, products);
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
            <table className="table">
              <thead>
                <tr className="headertable">
                  <th className="product">Product</th>
                  <th className="type">Type</th>
                  <th className="price">Price</th>
                  <th className="quantity">Qty</th>
                  <th className="total">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.basket.map((item) => {
                  const Price = formatPrice(item.product.price);
                  const quantity = item.quantity;
                  let subtotal = {
                    amount: item.product.price.amount * item.quantity,
                    currency: item.product.price.currency
                  };
                  subtotal = formatPrice(subtotal);
                  return (
                    <tr className="row">
                      <td>{item.product.name}</td>
                      <td>{item.product.type}</td>
                      <td className="pricecontent">{Price}</td>
                      <td className="qtycontent">{quantity}</td>
                      <td className="totalcontent">{subtotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h4 className="totalamount"> Total amount : {formatPrice(order.total)}</h4>
            {/* <h5>order ID: {order._id}</h5> */}
          </>
        )}
      </div>
    );
  }
}

export default SingleOrderView;

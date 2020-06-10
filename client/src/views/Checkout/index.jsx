
import React, { Component } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { listOrders } from './../../services/orders';

import './style.scss';

const STRIPE_API_KEY = process.env.STRIPE_API_TEST_KEY;

const STRIPE_INPUT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      fontFamily: 'sans-serif'
    },
    invalid: {
      color: '#c23d4b'
    }
  }
};

class CheckoutView extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      address: '',
      postCode: '',
      contact: ''
    };
    this.stripePromise = loadStripe(STRIPE_API_KEY);
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event, stripe, elements) => {
    event.preventDefault();

    stripe
      .createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      })
      .then(data => {
        if (data.error) {
          return Promise.reject(data.error);
        } else {
          const {firstName, lastName, country, city, address, postCode, contact} = this.state;
          const creditCardToken = data.paymentMethod.id;
          // Call create order service and send creditCardToken, array of dishes with corresponding quantity, address
          const shoppingBasket = this.props.shoppingBasket.map(item => {
            return {
              quantity: item.quantity,
              beer: item.beer._id
            };
          });
          return listOrders({ address, firstName, lastName, country, city, address, postCode, contact, shoppingBasket, creditCardToken });
        }
      })
      .then(() => {
        // Order succeeded
        this.props.emptyShoppingBasket();
        // Redirect user to home page after successful purchase
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Checkout</h1>
        <Elements stripe={this.stripePromise}>
          <ElementsConsumer>
            {({ stripe, elements }) => (
              <form onSubmit={event => this.handleFormSubmission(event, stripe, elements)}>
                <label className="billing-adress">Billing Address</label>
                <input
                  id="first-name-input"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
                <input
                  id="last-name-input"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
                <input
                  id="country-input"
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                />
                <input
                  id="city-input"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
                <input
                  id="address-input"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
                <input
                  id="post-code-input"
                  type="text"
                  name="postCode"
                  placeholder="Postcode"
                  value={this.state.postCode}
                  onChange={this.handleInputChange}
                />
                <input
                  id="contact-input"
                  type="number"
                  name="contact"
                  placeholder="Contact"
                  value={this.state.contact}
                  onChange={this.handleInputChange}
                />             

                <CardElement option={STRIPE_INPUT_OPTIONS} />

                <table>
                  <thead>
                      <tr>
                          <th colspan="2">Your Order</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th>Products</th>
                          <th>Total</th>
                      </tr>
                      <tr>
                          <td>[product.name]</td>
                          <td>[product.price]</td>
                      </tr>
                      <tr>
                          <td>[product.name]</td>
                          <td>[product.price]</td>
                      </tr>
                      <tr>
                          <th>Shipping Costs</th>
                          <td>[shipping.price]</td>
                      </tr>
                      <tr>
                          <th>Subtotal</th>
                          <td>[subtotal]</td>
                      </tr>
                  </tbody>
              </table>

                <button>Confirm Purchase</button>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    )
  }
}

export default CheckoutView

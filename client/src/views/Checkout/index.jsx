import React, { Component } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { createOrder } from './../../services/orders';
import ShoppingBasketTotal from './../../components/ShoppingBasketTotal';

import './style.scss';

const STRIPE_PUBLIC_API_KEY = process.env.REACT_APP_STRIPE_API_PUBLIC_KEY;

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
  constructor(props) {
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
    this.stripePromise = loadStripe(STRIPE_PUBLIC_API_KEY);
    //console.log('load stripe', this.stripePromise);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event, stripe, elements) => {
    event.preventDefault();
    //console.log('event', event, 'stripe', stripe, 'elements', elements);
    //console.log(this.props);
    stripe
      .createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      })
      .then((data) => {
        if (data.error) {
          return Promise.reject(data.error);
        } else {
          const { firstName, lastName, country, city, address, postCode, contact } = this.state;
          //const address = this.state.address;
          const creditCardToken = data.paymentMethod.id;
          // Call create order service and send creditCardToken, array of dishes with corresponding quantity, address
          const shoppingBasket = this.props.shoppingBasket.map((item) => {
            return {
              quantity: item.quantity,
              product: item.product._id
            };
          });
          return createOrder({
            firstName,
            lastName,
            country,
            city,
            address,
            postCode,
            contact,
            shoppingBasket,
            creditCardToken
          });
          /*           return listOrders({
            address,
            firstName,
            lastName,
            country,
            city,
            address,
            postCode,
            contact,
            shoppingBasket,
            creditCardToken
          }); */
        }
      })
      .then(() => {
        // Order succeeded
        this.props.emptyShoppingBasket();
        // Redirect user to home page after successful purchase
        this.props.history.push('/past-orders');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    //console.log('PROPS HERE =>', this.props);
    return (
      <div>
        <h1 className="Title">Checkout</h1>
        <Elements stripe={this.stripePromise}>
          <ElementsConsumer>
            {({ stripe, elements }) => (
              <form onSubmit={(event) => this.handleFormSubmission(event, stripe, elements)}>
                <label htmlFor="first-name-input" className="infoTitle">
                  First Name
                </label>
                <input
                  className="infoInput"
                  id="first-name-input"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="last-name-input" className="infoTitle">
                  Last Name
                </label>
                <input
                  className="infoInput"
                  id="last-name-input"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="address-input" className="infoTitle">
                  Delivery Address
                </label>
                <input
                  className="infoInput"
                  id="address-input"
                  type="text"
                  name="address"
                  placeholder="Full Address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="city-input" className="infoTitle">
                  City
                </label>
                <input
                  className="infoInput"
                  id="city-input"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="post-code-input" className="infoTitle">
                  Postcode
                </label>
                <input
                  className="infoInput"
                  id="post-code-input"
                  type="text"
                  name="postCode"
                  placeholder="Postcode"
                  value={this.state.postCode}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="country-input" className="infoTitle">
                  Country
                </label>
                <input
                  className="infoInput"
                  id="country-input"
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="contact-input" className="infoTitle">
                  Contact Number
                </label>
                <input
                  className="infoInput"
                  id="contact-input"
                  type="number"
                  name="contact"
                  placeholder="Contact"
                  value={this.state.contact}
                  onChange={this.handleInputChange}
                />

                <CardElement option={STRIPE_INPUT_OPTIONS} className="infoInput" />

                <button>Confirm Purchase</button>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    );
  }
}

export default CheckoutView;

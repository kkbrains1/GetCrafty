import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomeView from './views/Home';

import PastOrdersView from './views/PastOrders';
import ErrorView from './views/Error';
import SingleOrderView from './views/SingleOrder';

import AuthenticationSignUpView from './views/Authentication/SignUp';
import AuthenticationSignInView from './views/Authentication/SignIn';
import { loadAuthenticatedUser } from './services/authentication';
import UpdatePasswordView from './views/Authentication/UpdatePassword';
import UpdateImgView from './views/Authentication/UpdateImg';
import UserProfileView from './views/UserProfile';
import CheckoutView from './views/Checkout';
import ShoppingBasketView from './views/ShoppingBasket';

import CraftbeerListView from './views/Products/Craftbeer/List';
import CraftbeerSingleView from './views/Products/Craftbeer/Single';
import SnackListView from './views/Products/Snack/List';
import SnackSingleView from './views/Products/Snack/Single';
import BrewingkitListView from './views/Products/Brewingkit/List';
import BrewingkitSingleView from './views/Products/Brewingkit/Single';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoppingBasket: [],
      user: null,
      loaded: false
    };
  }

  componentDidMount() {
    loadAuthenticatedUser()
      .then(user => {
        this.updateUser(user);
        this.setState({
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeProductQuantity = (product, quantity) => {
    console.log('basket', this.state.shoppingBasket);
    console.log('product', product);
    console.log('quantity', quantity);
    //if (this.state.shoppingBasket.find(item => item.product._id === product._id))
    this.setState({
      shoppingBasket: [
        ...this.state.shoppingBasket,
        {
          product: product,
          quantity: quantity
        }
      ]
    });
    console.log('basket', this.state.shoppingBasket);
  };

  updateUser = user => {
    this.setState({
      user
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar user={this.state.user} updateUser={this.updateUser} />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/userProfile" component={UserProfileView} />
            <Route
              path="/sign-up"
              render={props => <AuthenticationSignUpView {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/sign-in"
              render={props => <AuthenticationSignInView {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/products/craftbeer/list"
              exact
              render={props => (
                <CraftbeerListView
                  {...props}
                  shoppingBasket={this.state.shoppingBasket}
                  changeProductQuantity={this.changeProductQuantity}
                />
              )}
            />
            <Route
              path="/products/craftbeer/:id"
              render={props => (
                <CraftbeerSingleView
                  {...props}
                  shoppingBasket={this.state.shoppingBasket}
                  changeProductQuantity={this.changeProductQuantity}
                />
              )}
            />
            <Route
              path="/products/snack/list"
              exact
              render={props => (
                <SnackListView
                  {...props}
                  shoppingBasket={this.state.shoppingBasket}
                  changeProductQuantity={this.changeProductQuantity}
                />
              )}
            />
            <Route
              path="/products/snack/:id"
              render={props => (
                <SnackSingleView
                  {...props}
                  shoppingBasket={this.state.shoppingBasket}
                  changeProductQuantity={this.changeProductQuantity}
                />
              )}
            />
            <Route
              path="/products/brewingkit/list"
              exact
              render={props => (
                <BrewingkitListView
                  {...props}
                  shoppingBasket={this.state.shoppingBasket}
                  changeProductQuantity={this.changeProductQuantity}
                />
              )}
            />
            <Route
              path="/products/brewingkit/:id"
              render={props => (
                <BrewingkitSingleView
                  {...props}
                  shoppingBasket={this.state.shoppingBasket}
                  changeProductQuantity={this.changeProductQuantity}
                />
              )}
            />
            <Route
              path="/order/:id"
              render={props => (
                <SingleOrderView
                  {...props}
                  // shoppingBasket={this.state.shoppingBasket}
                  // changeDishQuantity={this.changeDishQuantity}
                />
              )}
            />

            <Route
              path="/update-password"
              render={props => <UpdatePasswordView {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/update-img"
              render={props => <UpdateImgView {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/checkout"
              render={props => <CheckoutView {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/shopping-basket"
              render={props => <ShoppingBasketView {...props} updateUser={this.updateUser} />}
            />

            {/* <Route path="/shopping-basket" component={ShoppingBasketView} /> */}
            <Route path="/past-orders" component={PastOrdersView} />

            <Route path="/error/:code" component={ErrorView} />

            <Redirect to="/error/404" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

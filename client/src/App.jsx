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

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false
    };
  }

  componentDidMount() {
    loadAuthenticatedUser()
      .then((user) => {
        this.updateUser(user);
        this.setState({
          loaded: true
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateUser = (user) => {
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
            <Route path="/" exact render={(props) => <HomeView {...props} />} />
            <Route
              path="/sign-up"
              render={(props) => <AuthenticationSignUpView {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/sign-in"
              render={(props) => <AuthenticationSignInView {...props} updateUser={this.updateUser} />}
            />
            <Route
              path="/order/:id"
              render={(props) => (
                <SingleOrderView
                  {...props}
                  // shoppingBasket={this.state.shoppingBasket}
                  // changeDishQuantity={this.changeDishQuantity}
                />
              )}
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

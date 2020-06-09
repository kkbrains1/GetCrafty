import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomeView from './views/Home';
import AuthenticationSignUpView from './views/Authentication/SignUp'
import AuthenticationSignInView from './views/Authentication/SignIn';
import { loadAuthenticatedUser } from './services/authentication';
import UpdatePasswordView from './views/Authentication/UpdatePassword'
import UpdateImgView from './views/Authentication/UpdateImg'
import UserProfileView from './views/UserProfile';
import CheckoutView from './views/Checkout';
import ShoppingBasketView from './views/ShoppingBasket';

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

    updateUser = user => {
    this.setState({
      user
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar user={this.state.user} updateUser={this.updateUser}/>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/userProfile" component={UserProfileView} />
            <Route
              path="/sign-up"
              render={(props) => (
                <AuthenticationSignUpView {...props} updateUser={this.updateUser} />
              )}
            />
            <Route
              path="/sign-in"
              render={(props) => (
                <AuthenticationSignInView {...props} updateUser={this.updateUser} />
              )}
            />
            <Route
              path="/update-password"
              render={(props) => (
                <UpdatePasswordView {...props} updateUser={this.updateUser} />
              )}
            />
            <Route
              path="/update-img"
              render={(props) => (
                <UpdateImgView {...props} updateUser={this.updateUser} />
              )}
            />
            <Route
              path="/checkout"
              render={(props) => (
                <CheckoutView {...props} updateUser={this.updateUser} />
              )}
            />
            <Route
              path="/shopping-basket"
              render={(props) => (
                <ShoppingBasketView {...props} updateUser={this.updateUser} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

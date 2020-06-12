import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';
//import ShoppingBasketTotal from './../ShoppingBasketTotal';
import { signOut } from './../../services/authentication';
import shopCart from './../../images/shop-cart.png';
import logo from './../../images/logo_trans1_get_crafty.png';

const NavBar = (props) => {
  const signOutAndLiftUserState = () => {
    signOut()
      .then(() => {
        props.updateUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div>
          <img className="logoimg" src={logo} alt="logo image" />
        </div>
      </Link>
      {(props.user && (
        <>
          <img src={props.user.photo} alt={props.user.name} />
          <Link to="/userProfile">{props.user.name}</Link>
          <button onClick={signOutAndLiftUserState}>Sign Out</button>
        </>
      )) || (
        <>
          <div className="signs">
            <Link to="/sign-in" className="authentication">
              Sign In
            </Link>
            <Link to="/sign-up" className="authentication">
              Sign Up
            </Link>
          </div>
        </>
      )}
      <Link to="/shopping-basket">
        {' '}
        <img src={shopCart} alt="Shopping Cart" className="shopcart"></img>
        {/*<ShoppingBasketTotal shoppingBasket={props.shoppingBasket} />*/}
      </Link>
    </nav>
  );
};

export default NavBar;

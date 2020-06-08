import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

import { signOut } from './../../services/authentication';


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
        <div className="logo">
          <h1>NavBar</h1>
        </div>
      </Link>
      {(props.user && (
        <>
          <img src={props.user.photo} />
          <Link to="/userProfile">{props.user.name}</Link>
          <button onClick={signOutAndLiftUserState}>Sign Out</button>
        </>
      )) || (
        <>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
import React, {Component} from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

import {loadAuthenticatedUser, UpdatePassword} from './../../services/authentication';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  loadUserProfile() {
    const id = this.props.match.params.id;
    loadAuthenticatedUser(id)
      .then(user => {
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadUserProfile();
  }

  render() {
    const user = this.state.user;
    return (
      <div className="user-profile">
        {user && (
          <>
            <img className="user-profile-img" src={user.photo} alt={user.name} />
            <h3>{user.name}</h3>
            <Link className="user-profile-btn" to="/past-orders">
              <span>Past Order List</span>
            </Link>
            <Link className="user-profile-btn" to="/repeat-order">
              <span>Repeat Order</span>
            </Link>
            <Link className="user-profile-btn" to="/update-password">
              <span>Update Password</span>
            </Link>
            <Link className="user-profile-btn" to="/update-img">
              <span>Update Image</span>
            </Link>
          </>
        )}
      </div>
    );
  }
}

export default UserProfile;

import React, { Component } from 'react';
import './style.scss';

import { updatePassword } from './../../../services/authentication';
import UserProfileView from './../../../views/UserProfile';

class UpdatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }

  handleInputChange = ({ target: { password, value } }) => {
    this.setState({
      password: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    const { password } = this.state;
    //console.log(password)
    updatePassword({ password})
      .then((user) => {
        this.props.updateUser(user);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="user-profile-main">
        <form onSubmit={this.handleFormSubmission}>
          <input
            className="user-profile-btn"
            id="update-password-input"
            name="update-password"
            type="update-password"
            placeholder="Update Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <button className="user-profile-btn">Update Password</button>
        </form>
      </div>
    );
  }
}

export default UpdatePassword;

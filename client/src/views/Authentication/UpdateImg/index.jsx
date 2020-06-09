import React, { Component } from 'react';
import { updateImg } from './../../../services/authentication';
import UserProfileView from './../../../views/UserProfile';

class UpdateImgView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null
    };
  }

  handleFileInputChange = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    this.setState({
      [name]: file
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    const {photo} = this.state;
    console.log(photo)

    updateImg({photo})
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
      <div>
        <form onSubmit={this.handleFormSubmission}>        
          <input
            id="update-img"
            name="photo"
            type="file"
            placeholder="photo"
            onChange={this.handleFileInputChange}
          />

          <button>Update Profile Photo</button>
        </form>
      </div>
    );
  }
}

export default UpdateImgView;

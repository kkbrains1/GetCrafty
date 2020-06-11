import React, { Component } from 'react';
import { signUp } from './../../../services/authentication';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tagline: '',
      photo: null,
      type: '',
      abv: '',
      ibu: '',
      food_pairing: '',
      price: null
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFileInputChange = event => {
    const { name } = event.target;
    const file = event.target.files[0];
    this.setState({
      [name]: file
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();

    const { name, description, tagline, photo, type, abv, ibu, food_pairing, price } = this.state;

    signUp({ name, description, tagline, photo, type, abv, ibu, food_pairing, price })
      .then(product => {
        this.props.updateUser(product);
        // Redirect user to home page after successful sign up
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name-input">Email</label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="description-input">Full Name</label>
          <input
            id="description-input"
            name="description"
            type="text"
            placeholder="description Name"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <label htmlFor="tagline-input">Password</label>
          <input
            id="tagline-input"
            name="tagline"
            type="text"
            placeholder="tagline"
            value={this.state.tagline}
            onChange={this.handleInputChange}
          />

          <label htmlFor="photo-input">Profile Photo</label>
          <input
            id="photo-input"
            name="photo"
            type="file"
            placeholder="photo"
            onChange={this.handleFileInputChange}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;

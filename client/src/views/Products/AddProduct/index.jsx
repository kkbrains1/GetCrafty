import React, { Component } from 'react';
import { submitProduct } from './../../../services/craftbeer';

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
      ingredients: '',
      contributed_by: '',
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

    const {
      name,
      description,
      tagline,
      photo,
      type,
      abv,
      ibu,
      food_pairing,
      ingredients,
      contributed_by,
      price
    } = this.state;

    submitProduct({
      name,
      description,
      tagline,
      photo,
      type,
      abv,
      ibu,
      food_pairing,
      ingredients,
      contributed_by,
      price
    })
      .then(product => {
        this.setState({
          product
        });
        // Redirect user to home page after successful sign up
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Add a New Product</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name-input">Name</label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="description-input">Description</label>
          <input
            id="description-input"
            name="description"
            type="text"
            placeholder="description Name"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <label htmlFor="tagline-input">Tagline</label>
          <input
            id="tagline-input"
            name="tagline"
            type="text"
            placeholder="tagline"
            value={this.state.tagline}
            onChange={this.handleInputChange}
          />

          <label htmlFor="type-input">Type</label>
          <input
            id="type-input"
            name="type"
            type="text"
            placeholder="type"
            onChange={this.handleInputChange}
          />
          <label htmlFor="price-input">Price</label>
          <input
            id="price-input"
            name="price"
            type="number"
            step="0.01" 
            placeholder="price"
            onChange={this.handleInputChange}
          />

          <label htmlFor="photo-input">Photo</label>
          <input
            id="photo-input"
            name="photo"
            type="file"
            placeholder="photo"
            onChange={this.handleFileInputChange}
          />

          <label htmlFor="ibu-input">IBU (%)</label>
          <input
            id="ibu-input"
            name="ibu"
            type="number"
            step="0.01" 
            placeholder="ibu"
            onChange={this.handleInputChange}
          />

<label htmlFor="food_pairing-input">Food Pairing</label>
          <input
            id="food_pairing-input"
            name="food_pairing"
            type="text"
            placeholder="food_pairing"
            onChange={this.handleInputChange}
          />

          <label htmlFor="ingredients-input">Ingredients</label>
          <input
            id="ingredients-input"
            name="ingredients"
            type="text"
            placeholder="ingredients"
            onChange={this.handleInputChange}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;

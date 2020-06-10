import React, { Component } from 'react';
// import pug from './../images/pug_error.png';

class ErrorView extends Component {
  render() {
    const code = this.props.match.params.code;

    let message;

    switch (code) {
      case '404':
        message = 'Oh noooo,  looks like you’ve found our junior developer’s page...';
        break;
      case '401':
        message = 'Not authorized';
        break;
      default:
        message = 'Unknown error';
    }
    return (
      <div>
        {/* <img src={pug} alt="" /> */}
        <h1>There was an error.</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default ErrorView;

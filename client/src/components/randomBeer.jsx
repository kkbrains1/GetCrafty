import React, { Component } from 'react';

class randomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: {}
    };
  }
  render() {
    return (
      <div>
        <button onClick={}>
          <img src={} alt="random beer" />
        </button>
      </div>
    );
  }
}

export default randomBeer;

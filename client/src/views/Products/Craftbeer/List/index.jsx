import React, { Component } from 'react';
import './style.scss';

import listCraftbeers from '../../../../services/craftbeer';

class CraftbeerListView extends Component {
  constructor() {
    super();
    this.state = {
      craftbeers: []
    };
  }

  loadCraftbeers() {
    listCraftbeers()
      .then(craftbeers => {
        this.setState({
          craftbeers
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadCraftbeers();
  }

  render() {
    return (
      <div>
        <h1>I am the craft beer list view</h1>
        {this.state.craftbeers.map(craftbeer => (
          <span>{craftbeer.name}</span>
        ))}
      </div>
    );
  }
}

export default CraftbeerListView;

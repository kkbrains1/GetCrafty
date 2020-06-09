import React, { Component } from 'react';
import './style.scss';

import { listBrewingkits } from '../../../../services/brewingkit';
import BrewingkitList from './../../../../components/Products/BrewingkitList';

class BrewingkitListView extends Component {
  constructor() {
    super();
    this.state = {
      brewingkits: []
    };
  }

  loadBrewingkits() {
    listBrewingkits()
      .then(brewingkits => {
        this.setState({
          brewingkits
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadBrewingkits();
  }

  render() {
    return (
      <div>
        <h1>BREWING KITS</h1>
        <BrewingkitList brewingkits={this.state.brewingkits} />
      </div>
    );
  }
}

export default BrewingkitListView;

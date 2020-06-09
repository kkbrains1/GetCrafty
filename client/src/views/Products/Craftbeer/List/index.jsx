import React, { Component } from 'react';
import './style.scss';

import {listCraftbeers} from '../../../../services/craftbeer';
import CraftbeerList from './../../../../components/Products/CraftbeerList';

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
        <h1>BEER</h1>
        <CraftbeerList craftbeers={this.state.craftbeers} />
      </div>
    );
  }
}

export default CraftbeerListView;

import React, { Component } from 'react';
import './style.scss';

import { listSnacks } from '../../../../services/snack';
import SnackList from './../../../../components/Products/SnackList';

class SnackListView extends Component {
  constructor() {
    super();
    this.state = {
      snacks: []
    };
  }

  loadSnacks() {
    listSnacks()
      .then(snacks => {
        this.setState({
          snacks
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadSnacks();
  }

  render() {
    return (
      <div>
        <h1>SNACKS</h1>
        <SnackList snacks={this.state.snacks} />
      </div>
    );
  }
}

export default SnackListView;

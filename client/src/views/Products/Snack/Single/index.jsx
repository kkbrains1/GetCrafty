import React, { Component } from 'react';
import './style.scss';

import { singleSnack } from '../../../../services/snack';
import SnackSingle from './../../../../components/Products/SnackSingle';

class SnackSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snack: null
    };
  }

  loadSnack() {
    //console.log(this.props)
    singleSnack(this.props.match.params.id)
      .then(snack => {
        this.setState({
          snack
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadSnack();
  }

  render() {
    return <div>{this.state.snack && <SnackSingle snack={this.state.snack} />}</div>;
  }
}

export default SnackSingleView;

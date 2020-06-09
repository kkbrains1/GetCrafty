import React, { Component } from 'react';
import './style.scss';

import { singleBrewingkit } from '../../../../services/brewingkit';
import BrewingkitSingle from './../../../../components/Products/BrewingkitSingle';

class BrewingkitSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brewingkit: null
    };
  }

  loadBrewingkit() {
    console.log(this.props)
    singleBrewingkit(this.props.match.params.id)
      .then(brewingkit => {
        this.setState({
          brewingkit
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    console.log('mounted')
    this.loadBrewingkit();
  }

  render() {
    return <div>{this.state.brewingkit && <BrewingkitSingle brewingkit={this.state.brewingkit} />}</div>;
  }
}

export default BrewingkitSingleView;

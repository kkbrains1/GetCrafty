import React, { Component } from 'react';
import './style.scss';

import { singleCraftbeer } from '../../../../services/craftbeer';
import CraftbeerSingle from './../../../../components/Products/CraftbeerSingle';

class CraftbeerSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      craftbeer: null
    };
  }

  loadCraftbeer() {
    //console.log(this.props)
    singleCraftbeer(this.props.match.params.id)
      .then(craftbeer => {
        this.setState({
          craftbeer
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadCraftbeer();
  }

  render() {
    return (
      <div>{this.state.craftbeer && <CraftbeerSingle craftbeer={this.state.craftbeer} />}</div>
    );
  }
}

export default CraftbeerSingleView;

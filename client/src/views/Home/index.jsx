import React, { Component } from 'react';
import './style.scss';
import { randomCraftbeer } from './../../services/craftbeer';

import { Link } from 'react-router-dom';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      beer: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    // call the service to get a random beer
    return randomCraftbeer()
      .then((beer) => {
        // save the beer to the state
        this.setState({ beer, loaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const beer = this.state.beer;
    console.log(beer);
    return (
      <div>
        <section>
          <div className="logo-position-section-1">
            <img src="./../../logo1_GetCrafty.png" alt="logo image" />
          </div>
        </section>

        <section className="welcome">
          <>
            <Link to="/">
              <h1>Welcome to GetCrafty!</h1>
              <h4>Let's make your sunset a pleasant one!</h4>
              <p>
                Are you a beer lover and you want to enjoy life? GetCrafty will make the difference on your gatherings
                with your friends. It's perfect from the first sip to the last one!
              </p>
              <p>
                <strong>Sign Up</strong> and dive into the moment.
              </p>
            </Link>
          </>
        </section>

        <section className="beersection">
          <Link to="/products/craftbeer/list">
            <h1>Our beers</h1>
            {(!this.state.loaded && (
              <>
                <span>Loading...</span>
              </>
            )) || (
              <>
                <img src={beer.photo} alt={beer.name} className="randombeerimg" />
                <h3 className="beerName">{beer.name}</h3>
                <p className="beertagline">
                  <em>{beer.tagline}</em>
                </p>
                <p className="beerdescription">{beer.description}</p>
              </>
            )}
          </Link>
        </section>

        <section>
          <Link to="/">
            <h1>Brewery Experience</h1>
            <p>[img] [img] [img]</p>
          </Link>
        </section>
      </div>
    );
  }
}
export default HomeView;

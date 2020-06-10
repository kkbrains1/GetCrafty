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
    // call the service to get a random beer~
    return randomCraftbeer()
      .then(beer => {
        // save the beer to the state
        this.setState({ beer, loaded: true });
      })
      .catch(error => {
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
            <span>[img.logo]</span>
          </div>
        </section>

        <section>
          <Link to="/">
            {/*<img src={'./../public/images/'}*/}
            <h1>Welcome to GetCrafty!</h1>
            <h4>The beer that makes your sunset a pleasant one!</h4>
            <p>
              Are you a beer lover and you want to celebrate life? So with GetCrafty you will make
              the difference on your meetings with your friends. GetCrafty is perfect from the first
              sip to the last one!
            </p>
            <p>Join us at Sign Up and dive into a moment to remember.</p>
          </Link>
        </section>

        <section>
          <Link to="/products/craftbeer/list">
            {/*<img src={'./../public/images/'}*/}
            <h1>Our beers</h1>
            {(!this.state.loaded && (
              <>
                <span>Loading...</span>
              </>
            )) || (
              <>
                {/* in jsx href is replaced by src  */}
                {/* <img href={beer.photo}></img> */}
                <img src={beer.photo} alt={beer.name} />
                <h2>{beer.name}</h2>
                <p>
                  <em>{beer.tagline}</em>
                </p>
                <p>{beer.description}</p>
              </>
            )}
          </Link>
        </section>

        <section>
          <Link to="/">
            {/*<img src={'./../public/images/'}*/}
            <h1>Brewery Experience</h1>
            <p>[img] [img] [img]</p>
          </Link>
        </section>
      </div>
    );
  }
}
export default HomeView;

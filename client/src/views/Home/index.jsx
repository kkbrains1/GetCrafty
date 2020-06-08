import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

function Home() {
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
        <h1>About us / Welcome</h1>
        <p>[text]</p>
      </Link>
      </section>

      <section>
      <Link to="/beers">
        {/*<img src={'./../public/images/'}*/}
        <h1>Our beers</h1>
        <span>[beer.img]</span>
        <h2>[beer.title]</h2>
        <p>[beers.description]</p>
        <p>
          <span>[icon]</span>
          <span>[beer.volume]</span>
        </p>
        <p>
          <span>[icon]</span>
          <span>[beer.tagline]</span>
        </p>
      </Link>
      </section>

      <section>
      <Link to="/">
        {/*<img src={'./../public/images/'}*/}
        <h1>Brewery Experience</h1>
        <p>
          [img]
          [img]
          [img]
        </p>
      </Link>
      </section>

      <section>
        <footer>
          <h1>Footer</h1>
        </footer>
      </section>
    </div>
  );
}

export default Home;

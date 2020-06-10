import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

function HomeView() {
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
            Are you a beer lover and you want to celebrate life? So with GetCrafty you will make the difference on your
            meetings with your friends. GetCrafty is perfect from the first sip to the last one!
          </p>
          <p>Join us at Sign Up and dive into a moment to remember.</p>
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
          <p>[img] [img] [img]</p>
        </Link>
      </section>

      <section>
        <footer>
          <span>Contact us</span>
          <span>FAQ</span>
          <span>Partners</span>
          <span>Link to FB</span>
        </footer>
      </section>
    </div>
  );
}

export default HomeView;

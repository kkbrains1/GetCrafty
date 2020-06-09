import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <Link to="#">
        <span>Contact us</span>
      </Link>
      <Link to="#">
        <span>FAQ</span>
      </Link>
      <Link to="#">
        <span>Partners</span>
      </Link>
    </div>
  );
}

export default Footer;

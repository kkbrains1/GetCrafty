import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footerjsx">
        <div>
          <Link to="#">
            <p className="footerLink">Contact us | </p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <p className="footerLink">FAQ | </p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <p className="footerLink">Partners</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <Link to="#">
            <p className="">Contact us</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <p className="">FAQ</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <p className="">Partners</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;

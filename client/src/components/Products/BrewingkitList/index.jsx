import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const BrewingkitList = props => {
  return (
    <div className="beer__list">
      {props.brewingkits.map((brewingkit, index) => (
        <Link to={`/products/brewingkit/${brewingkit._id}`} key={brewingkit._id}>
          <div className="beer__card">
            <div className="beer__media">
              <img src={brewingkit.photo} alt={brewingkit.name} />
            </div>
            <div className="beer__body">
              <h4>{brewingkit.name}</h4>
              <p>{brewingkit.description}</p>
            </div>
            <div className="beer__buttons">
              <button>-</button>
              <p>0</p>
              <button>+</button>
              <span>
                {brewingkit.price.amount} {brewingkit.price.currency}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BrewingkitList;

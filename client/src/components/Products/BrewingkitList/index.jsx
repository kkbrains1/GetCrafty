import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

/*const BrewingkitList = props => {
  return (
    <div className="beer__list">
    hi!
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
};*/

const BrewingkitList = props => {
  console.log("THIS",props)
  return (
    <div className="beer__list">
          <div className="beer__card">
        <Link to={`/products/brewingkit/${props._id}`} key={props._id}>
            <div className="beer__media">
              <img src={props.photo} alt={props.name} />
            </div>
            <div className="beer__body">
              <h4>{props.name}</h4>
              <p>{props.description}</p>
            </div>
            </Link>
            <div className="beer__buttons">
              <button>-</button>
              <p>0</p>
              <button>+</button>
              <span>
                {props.price.amount} {props.price.currency}
              </span>
            </div>
          </div>
  
    </div>
  );
};

export default BrewingkitList;

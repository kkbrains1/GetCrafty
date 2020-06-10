import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const CraftbeerList = props => {
  return (
    <div className="beer__list">
      {props.craftbeers.map((craftbeer) => (
        <Link to={`/products/craftbeer/${craftbeer._id}`} key={craftbeer._id}>
          <div className="beer__card">
            <div className="beer__media">
              <img src={craftbeer.image_url} alt={craftbeer.name} />
            </div>
            <div className="beer__body">
              <h4>{craftbeer.name}</h4>
              <p>{craftbeer.description}</p>
            </div>
            <div className="beer__buttons">
              <button>-</button>
              <p>0</p>
              <button>+</button>
              <span>
                {craftbeer.price.amount} {craftbeer.price.currency}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CraftbeerList;

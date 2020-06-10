import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const SnackList = (props) => {
  return (
    <div className="beer__list">
      {props.snacks.map((snack, index) => (
        <Link to={`/products/snack/${snack._id}`} key={snack._id}>
          <div className="beer__card">
            <div className="beer__media">
              <img src={snack.photo} alt={snack.name} />
            </div>
            <div className="beer__body">
              <h4>{snack.name}</h4>
              <p>{snack.description}</p>
            </div>
            <div className="beer__buttons">
              <button>-</button>
              <p>0</p>
              <button>+</button>
              <span>
                {snack.price.amount} {snack.price.currency}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SnackList;

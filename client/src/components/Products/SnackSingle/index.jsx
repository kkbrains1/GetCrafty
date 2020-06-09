import React from 'react';
//import { Link } from 'react-router-dom';

const SnackSingle = props => {
  const snack = props.snack;
  return (
    <div className="beer__page">
      <div className="beer">
        <h1>{snack.name}</h1>
        <img src={snack.photo} alt={snack.name} className="beer__media" />
        <div className="beer__buttons">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <p>{snack.description}</p>
      </div>
      <hr />
      <h2>BEST PAIRED WITH...</h2>

    </div>
  );
};

export default SnackSingle;

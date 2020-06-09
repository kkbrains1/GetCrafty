import React from 'react';
//import { Link } from 'react-router-dom';

const BrewingkitSingle = props => {
  const brewingkit = props.brewingkit;
  return (
    <div className="beer__page">
      <div className="beer">
        <h1>{brewingkit.name}</h1>
        <img src={brewingkit.photo} alt={brewingkit.name} className="beer__media" />
        <div className="beer__buttons">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <p>{brewingkit.description}</p>
      </div>
      <hr />
      <h2>YOU'LL NEED THIS IF YOU'RE MAKING...</h2>
    </div>
  );
};

export default BrewingkitSingle;

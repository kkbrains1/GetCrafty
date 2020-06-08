import React from 'react';
//import { Link } from 'react-router-dom';

const CraftbeerSingle = props => {
  const craftbeer = props.craftbeer;
  return (
    <div>
      <h1>{craftbeer.name}</h1>
      <img src={craftbeer.image_url} alt={craftbeer.name} />
      <span>Alc {craftbeer.abv} %</span>
      <span>IBU {craftbeer.ibu}</span>
      <button>-</button>
      <span>0</span>
      <button>+</button>
      <p>{craftbeer.description}</p>
    </div>
  );
};

export default CraftbeerSingle;

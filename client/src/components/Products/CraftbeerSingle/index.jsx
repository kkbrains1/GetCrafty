import React from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const CraftbeerSingle = props => {
  const craftbeer = props.craftbeer;
  return (
    <div className="beer__page">
      <div className="beer">
        <h1>{craftbeer.name}</h1>
        <img src={craftbeer.image_url} alt={craftbeer.name} className="beer__media" />
        <div className="beer__buttons">
          <span>Alc {craftbeer.abv} %</span>
          <span>IBU {craftbeer.ibu}</span>

          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <p>{craftbeer.description}</p>
      </div>
      <hr />
      <h2>BEST PAIRED WITH...</h2>
      <ul>
        {craftbeer.food_pairing.map(foodItem => (
          <Link to="#" key={Date.now() * Math.random()}>
            <li>{foodItem}</li>
          </Link>
        ))}
      </ul>
      <h2>FANCY BREWING SOME? These are our ingredients...</h2>
      <h4>Malts:</h4>
      <ul>
        {craftbeer.ingredients.malt.map(malt => (
          <Link to="#" key={Date.now() * Math.random()}>
            <li>{malt.name}</li>
            <span>{malt.amount.value}</span>
            <span>{malt.amount.unit}</span>
          </Link>
        ))}
      </ul>
      <h4>Hops:</h4>
      <ul>
        {craftbeer.ingredients.hops.map(hops => (
          <Link to="#" key={Date.now() * Math.random()}>
            <li>{hops.name}</li>
            <span>{hops.amount.value}</span>
            <span>{hops.amount.unit}</span>
          </Link>
        ))}
      </ul>
      <h4>Yeast:</h4>
      <ul>
        <li>{craftbeer.ingredients.yeast}</li>
      </ul>
    </div>
  );
};

export default CraftbeerSingle;

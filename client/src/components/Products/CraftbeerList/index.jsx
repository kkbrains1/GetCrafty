import React from 'react';
import { Link } from 'react-router-dom';

const CraftbeerList = props => {
  return (
    <div>
      {props.craftbeers.map(craftbeer => (
        <Link to={`/products/craftbeer/${craftbeer._id}`} key={craftbeer._id}>
          <img src={craftbeer.image_url} alt={craftbeer.name} />
          <h2>{craftbeer.name}</h2>
          <p>{craftbeer.description}</p>
          <span>
            {craftbeer.price.amount} {craftbeer.price.currency}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CraftbeerList;

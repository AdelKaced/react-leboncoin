import React from "react";

const ListOffers = ({ offer}: any ) => {
  return (
    <div className='listoffers'>
      <img src={offer.picture} alt={offer.name}/>
      <h2>{offer.city}</h2>
      <h3>Prix: {offer.price} €</h3>
      <p>{offer.description}</p>
    </div>
  );
};

export default ListOffers;

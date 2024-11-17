import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing.id}`} className="listing-card">
      <img src={listing.images[0]} alt={listing.title} className="listing-image" />
      <div className="listing-info">
        <h3>{listing.title}</h3>
        <p>{listing.location}</p>
        <p>${listing.price} / night</p>
      </div>
    </Link>
  );
};

export default ListingCard;
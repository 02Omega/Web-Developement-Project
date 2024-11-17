import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ListingCard.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ListingCard;
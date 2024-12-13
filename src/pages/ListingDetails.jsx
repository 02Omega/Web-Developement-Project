import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getListingById } from '../services/api';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await getListingById(id);
        setListing(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  const handleBookNow = () => {
    navigate(`/book/${id}`);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!listing) return <div className="not-found">Listing not found</div>;

  return (
    <div className="listing-details">
      <div className="listing-header">
        <h1>{listing.title}</h1>
        <p className="location">{listing.location}</p>
      </div>
      
      <div className="listing-images">
        <img src={listing.images[0]} alt={listing.title} className="main-image" />
      </div>
      
      <div className="listing-info-grid">
        <div className="listing-description">
          <h2>About this place</h2>
          <p>{listing.description}</p>
          
          <div className="amenities">
            <h3>What this place offers</h3>
            <ul>
              {listing.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="booking-card">
          <div className="price">
            <span className="amount">${listing.price}</span> night
          </div>
          <div className="details">
            <div>
              <span>Guests</span>
              <span>up to {listing.guests}</span>
            </div>
            <div>
              <span>Bedrooms</span>
              <span>{listing.bedrooms}</span>
            </div>
            <div>
              <span>Bathrooms</span>
              <span>{listing.bathrooms}</span>
            </div>
          </div>
          <button onClick={handleBookNow} className="book-now-btn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
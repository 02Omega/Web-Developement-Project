import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getListingById, createBooking } from '../services/api';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the listing details
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await getListingById(id);
        setListing(data);
      } catch (error) {
        setError('Failed to fetch listing. Please try again.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  // Handle input changes for the booking form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);

    // Validation for date range
    if (checkInDate >= checkOutDate) {
      alert('Check-out date must be later than check-in date.');
      return;
    }

    try {
      const data = await createBooking({
        listingId: id,
        ...bookingData,
      });
      alert(`Booking Successful! Your Booking ID: ${data.bookingId}`);
      navigate('/');
    } catch (error) {
      setError('Failed to create booking. Please try again.');
      console.error(error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!listing) return <div className="not-found">Listing not found</div>;

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Book Your Stay</h1>
        <div className="listing-summary">
          <img src={listing.images[0]} alt={listing.title} />
          <div className="summary-details">
            <h2>{listing.title}</h2>
            <p>{listing.location}</p>
            <p>${listing.price} / night</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="checkIn">Check-in Date</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={bookingData.checkIn}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkOut">Check-out Date</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={bookingData.checkOut}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={bookingData.guests}
              onChange={handleInputChange}
              min="1"
              max={listing.guests}
              required
            />
          </div>

          <button type="submit" className="submit-booking">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;

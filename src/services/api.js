import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Axios instance for shared configuration
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Get all listings
export const getAllListings = async () => {
  try {
    const response = await api.get('/listings');
    return response.data; // Return the data property from the Axios response
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw new Error('Failed to fetch listings');
  }
};

// Get a listing by ID
export const getListingById = async (id) => {
  try {
    const response = await api.get(`/listings/${id}`);
    return response.data; // Return the data property from the Axios response
  } catch (error) {
    console.error('Error fetching listing:', error);
    throw new Error('Failed to fetch listing');
  }
};

// Create a booking
export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data; // Return the data property from the Axios response
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking');
  }
};

// Default export of the Axios instance (optional if needed elsewhere)
export default api;

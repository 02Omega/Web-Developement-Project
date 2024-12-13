import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import listingsData from '../data/listings.json' assert { type: 'json' }

const router = express.Router();

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Search listings
router.get('/search', (req, res) => {
  const { query, priceMin, priceMax, guests } = req.query;

  try {
    const filteredListings = listingsData.listings.filter((listing) => {
      const matchesQuery = query
        ? listing.location.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesPrice =
        priceMin && priceMax
          ? listing.price >= Number(priceMin) && listing.price <= Number(priceMax)
          : true;
      const matchesGuests = guests ? listing.guests >= Number(guests) : true;

      return matchesQuery && matchesPrice && matchesGuests;
    });

    res.json({ listings: filteredListings });
  } catch (error) {
    console.error('Error searching listings:', error);
    res.status(500).json({ message: 'Failed to search listings' });
  }
});

// Get all listings
router.get('/', (req, res) => {
  try {
    res.json(listingsData);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Failed to fetch listings' });
  }
});

// Get listing by ID
router.get('/:id', (req, res) => {
  try {
    const listing = listingsData.listings.find((l) => l.id === req.params.id);
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(listing);
  } catch (error) {
    console.error('Error fetching listing by ID:', error);
    res.status(500).json({ message: 'Failed to fetch listing' });
  }
});

export default router;

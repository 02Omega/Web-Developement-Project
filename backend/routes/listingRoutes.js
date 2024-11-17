const express = require('express');
const router = express.Router();
const listings = require('../data/listings.json');

// Get all listings
router.get('/', (req, res) => {
  res.json(listings);
});

// Get listing by ID
router.get('/:id', (req, res) => {
  const listing = listings.listings.find(l => l.id === req.params.id);
  if (!listing) {
    return res.status(404).json({ message: 'Listing not found' });
  }
  res.json(listing);
});

// Search listings
router.get('/search', (req, res) => {
  const { query } = req.query;
  const filteredListings = listings.listings.filter(listing =>
    listing.location.toLowerCase().includes(query.toLowerCase())
  );
  res.json({ listings: filteredListings });
});

module.exports = router;
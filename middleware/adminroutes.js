const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Listing = require('../models/Listing');
const Booking = require('../models/Booking');
const router = express.Router();

// Create Listing
router.post('/listings', [auth, admin], async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (error) {
    res.status(400).json({ message: 'Error creating listing', error });
  }
});

// Get All Bookings
router.get('/bookings', [auth, admin], async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId').populate('listingId');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching bookings', error });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { listingId, checkIn, checkOut, guests } = req.body;
  // Mock booking creation
  res.status(201).json({
    message: 'Booking created successfully',
    bookingId: Math.random().toString(36).substr(2, 9),
    listingId,
    checkIn,
    checkOut,
    guests
  });
});

module.exports = router;
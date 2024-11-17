const express = require('express');
const cors = require('cors');
const listingRoutes = require('./routes/listingRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
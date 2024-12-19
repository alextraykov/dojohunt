require('dotenv').config();
const express = require('express');
const app = express();
const placesRouter = require('./routes/places');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/places', placesRouter);

const PORT = process.env.PORT || 3001;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
      process.env.PORT = PORT + 1;
      startServer();
    } else {
      console.error('Server error:', error);
    }
  }
};

startServer();
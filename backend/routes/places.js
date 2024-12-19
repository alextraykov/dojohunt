const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
  try {
    const { lat, lng, radius, apiKey } = req.query;
    console.log('\n--- New Search Request ---');
    
    // Use environment variable API key or fallback to query param
    const googleApiKey = process.env.GOOGLE_MAPS_API_KEY || apiKey;
    
    if (!googleApiKey) {
      throw new Error('Google Maps API key is missing');
    }

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    const params = {
      location: `${lat},${lng}`,
      radius: radius || 5000,
      type: 'gym',
      keyword: 'martial arts|fight club|boxing|mma|bjj',
      key: googleApiKey
    };

    console.log('Making request to:', url);
    console.log('With params:', { ...params, key: '[HIDDEN]' });

    const response = await axios.get(url, { params });
    
    if (response.data?.status === 'REQUEST_DENIED') {
      throw new Error(`Google API request denied: ${response.data.error_message}`);
    }

    res.json({ results: response.data.results || [] });

  } catch (error) {
    console.error('Search Error:', {
      message: error.message,
      googleError: error.response?.data?.error_message,
      status: error.response?.status
    });
    
    res.status(500).json({
      error: 'Failed to fetch places',
      details: error.message,
      googleError: error.response?.data?.error_message
    });
  }
});

router.get('/photo', async (req, res) => {
  try {
    const { reference } = req.query;
    
    const response = await axios({
      url: 'https://maps.googleapis.com/maps/api/place/photo',
      params: {
        maxwidth: 400,
        photo_reference: reference,
        key: process.env.GOOGLE_MAPS_API_KEY
      },
      responseType: 'stream'
    });

    res.set('Content-Type', 'image/jpeg');
    response.data.pipe(res);
  } catch (error) {
    console.error('Error fetching photo:', error);
    res.status(500).send('Failed to fetch photo');
  }
});

module.exports = router;

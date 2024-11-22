import axios from 'axios';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
console.log('API Key loaded:', GOOGLE_API_KEY ? 'Yes' : 'No');

// Hardcoded sample data for development
const MOCK_GYMS = [
  {
    id: 'gym1',
    name: 'GFTeam Bulgaria',
    latitude: 42.6977,
    longitude: 23.3219,
  },
  {
    id: 'gym2',
    name: 'ABC Fight Club',
    latitude: 42.6957,
    longitude: 23.3400,
  },
  {
    id: 'gym3',
    name: 'Martial Arts Club Bushido',
    latitude: 42.7000,
    longitude: 23.3300,
  }
];

const API_BASE_URL = 'http://localhost:3001/api/places';

export const searchNearbyGyms = async () => {
  try {
    console.log('Starting searchNearbyGyms request...');
    const params = {
      lat: 42.6977,
      lng: 23.3219,
      radius: 10000
    };
    console.log('Request params:', params);

    const response = await axios.get(`${API_BASE_URL}/search`, { params });
    console.log('Backend response:', response.data);

    if (response.data?.results?.length > 0) {
      const mappedResults = response.data.results.map(place => ({
        id: place.place_id,
        name: place.name,
        type: 'Martial Arts',
        rating: place.rating || 0,
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
        description: place.vicinity || 'Martial Arts academy in Sofia',
        image: place.photos?.[0]?.photo_reference ? 
          `${API_BASE_URL}/photo?reference=${place.photos[0].photo_reference}`
          : 'https://placehold.co/600x400/png',
        contact: {
          website: place.website || '#',
          phone: place.formatted_phone_number || '',
          address: place.formatted_address || place.vicinity || ''
        }
      }));
      console.log('Mapped results:', mappedResults);
      return mappedResults;
    }
    
    // Return mock data as fallback if no results
    console.log('No results found, using mock data');
    return MOCK_GYMS.map(gym => ({
      id: gym.id,
      name: gym.name,
      type: 'Martial Arts',
      rating: 4.5,
      latitude: gym.latitude,
      longitude: gym.longitude,
      description: 'Martial Arts academy in Sofia',
      image: 'https://placehold.co/600x400/png',
      contact: {
        website: '#',
        phone: '',
        address: 'Sofia, Bulgaria'
      }
    }));
  } catch (error) {
    console.error('API Error:', error);
    return MOCK_GYMS; // Return mock data on error
  }
};

export const geocodeLocation = async (searchText) => {
  try {
    const response = await axios.get(`/api/geocode`, {
      params: {
        address: searchText
      }
    });

    if (response.data.results.length === 0) {
      throw new Error('Location not found');
    }

    const location = response.data.results[0].geometry.location;
    return {
      lat: location.lat,
      lng: location.lng
    };
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
}; 
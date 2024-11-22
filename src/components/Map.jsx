import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { searchNearbyGyms } from '../services/placesService.jsx';
import GymOverlay from './GymOverlay';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

// Disable Mapbox telemetry which often gets blocked
mapboxgl.config.COLLECT_RESOURCE_TIMING = false;

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    if (map.current) return;

    try {
      console.log('Initializing map...');
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [23.3219, 42.6977],
        zoom: 12,
        trackResize: true
      });

      map.current.on('load', async () => {
        console.log('Map loaded, fetching gyms...');
        try {
          const fetchedGyms = await searchNearbyGyms();
          setGyms(fetchedGyms);
          console.log('Gyms data:', fetchedGyms);
          
          // Clear existing markers
          markersRef.current.forEach(marker => marker.remove());
          markersRef.current = [];

          fetchedGyms.forEach(gym => {
            const marker = createCustomMarker(gym);

            marker.getElement().addEventListener('click', () => {
              handleMarkerClick(gym);
            });

            markersRef.current.push(marker);
          });
        } catch (error) {
          console.error('Error loading gyms:', error);
        }
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, []);

  const handleMarkerClick = (gym) => {
    setSelectedPlace(gym.id);
    
    // Zoom to the selected gym
    map.current.easeTo({
      center: [gym.longitude, gym.latitude],
      zoom: 15, // Adjust zoom level as needed
      padding: { right: 400 }, // Account for the overlay width
      duration: 1500 // Animation duration in milliseconds
    });
  };

  // Handle closing the overlay
  const handleClose = () => {
    setSelectedPlace(null);
    // Reset map padding and zoom out
    map.current.easeTo({
      padding: { right: 0 },
      zoom: 12,
      duration: 1500
    });
  };

  const createCustomMarker = (gym) => {
    // Create marker container
    const el = document.createElement('div');
    el.className = 'custom-marker';
    
    // Create dot
    const dot = document.createElement('div');
    dot.className = 'marker-dot';
    
    // Create preview
    const preview = document.createElement('div');
    preview.className = 'marker-preview';
    preview.innerHTML = `
      <div class="preview-content">
        <h3>${gym.name}</h3>
        <div class="preview-rating">★ ${gym.rating || 'N/A'}</div>
      </div>
    `;
    
    el.appendChild(dot);
    el.appendChild(preview);
    
    return new mapboxgl.Marker({
      element: el,
      anchor: 'center'
    })
      .setLngLat([gym.longitude, gym.latitude])
      .addTo(map.current);
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: 'calc(100vh - 64px)', marginTop: '64px' }}>
      <div ref={mapContainer} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      <GymOverlay 
        gym={gyms.find(g => g.id === selectedPlace)}
        isOpen={!!selectedPlace}
        onClose={handleClose}
      />
    </div>
  );
}

export default Map; 
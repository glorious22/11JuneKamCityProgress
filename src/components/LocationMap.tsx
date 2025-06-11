import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationMap = () => {
  const center = {
    lat: -33.9076,
    lng: 18.5516
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  // Get API key from environment variable
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // If no API key is provided, show a placeholder
  if (!googleMapsApiKey) {
    return (
      <div className="h-48 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-gray-600 mb-2">Map unavailable</p>
          <p className="text-sm text-gray-500">Google Maps API key not configured</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-48 rounded-lg overflow-hidden">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationMap;
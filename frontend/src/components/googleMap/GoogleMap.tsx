import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import config from '../../../config.ts';

const MapComponent = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 48.705047607421875,
    lng: 2.4535863399505615,
  };

  return (
    <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} title="My location" />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Location = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDQP-YIAx765uNQuNdu2qOaVaOTl80iJOM'
  });

  const center = { lat: 56.951266, lng: 24.082570 };

  if (!isLoaded) return <div>Loading</div>;
  return (
    <GoogleMap zoom={16} center={center} mapContainerClassName='location'>
      
    </GoogleMap>
  );
};

export default Location;
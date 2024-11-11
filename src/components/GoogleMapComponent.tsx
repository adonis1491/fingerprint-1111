import React, { useState } from 'react';
import OpenStreetMapComponent from './OpenStreetMapComponent';

interface Props {
  location: {
    lat: number;
    lng: number;
  };
}

export default function GoogleMapComponent({ location }: Props) {
  const [mapError, setMapError] = useState(false);

  if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY || mapError) {
    return <MapPlaceholder />;
  }

  return (
    <OpenStreetMapComponent location={location} />
  );
}
import React from 'react';
import { MapContainer, TileLayer,CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapDemo() {
  const centerCoordinates = [59.3293, 18.0686]; // Center coordinates
  const zoomLevel = 13;

  return (
    <div className="flex items-center justify-center h-screen lg:ml-72 z-40">
      <div className="h-[80vh] w-[66vw]">
        <MapContainer center={centerCoordinates} zoom={zoomLevel} className="h-[66vh] w-[66vw]">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Highlighting circle at the center */}
          <CircleMarker center={centerCoordinates} radius={10} color="blue" fillColor="blue" fillOpacity={0.6} />
        </MapContainer>
      </div>
    </div>
  );
}

export default MapDemo;


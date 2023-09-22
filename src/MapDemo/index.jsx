import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapDemo() {
  return (
    <div className="map-demo">
      <h2>Product Demo</h2>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* You can add more layers, markers, etc. here */}
      </MapContainer>
    </div>
  );
}

export default MapDemo;
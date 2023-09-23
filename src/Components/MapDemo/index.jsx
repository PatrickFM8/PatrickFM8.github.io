import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapDemo() {
  const centerCoordinates = [59.3293, 18.0686];
  const zoomLevel = 13;
  
  const [showPins, setShowPins] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen lg:ml-72 z-40">
      <div className="h-[80vh] w-[66vw]">
        <MapContainer center={centerCoordinates} zoom={zoomLevel} className="h-[66vh] w-[66vw]">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <CircleMarker center={centerCoordinates} radius={10} color="blue" fillColor="blue" fillOpacity={0.6} />
          {
            showPins && (
              <>
                <Marker position={[59.3293 + 0.002, 18.0686]} />
                <Marker position={[59.3293 - 0.002, 18.0686]} />
              </>
            )
          }
        </MapContainer>
        <button onClick={() => setShowPins(true)}>Drop Pins</button>
      </div>
    </div>
  );
}

export default MapDemo;

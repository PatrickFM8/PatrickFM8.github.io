import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapDemo() {
  const centerCoordinates = [59.3293, 18.0686];
  const zoomLevel = 13;
  const [showPins, setShowPins] = useState(false);

  const customIcon = new L.Icon({
    iconUrl: '/images/marker-icon.png',
    iconRetinaUrl: '/images/marker-icon-2x.png',
    shadowUrl: '/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });

  return (
    <div className="flex items-center justify-center h-screen lg:ml-72 z-40 relative">
      <img src="Frontclean.png" alt="iPad Mockup" className="relative z-0" width="800" height="570" />
      <div className="rounded-xl pr-4 h-[74vh] w-[59vw] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <MapContainer center={centerCoordinates} zoom={zoomLevel} className="h-full w-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <CircleMarker center={centerCoordinates} radius={10} color="blue" fillColor="blue" fillOpacity={0.6} />
          {
            showPins && (
              <>
                <Marker position={[59.3293 + 0.002, 18.0686]} icon={customIcon} />
                <Marker position={[59.3293 - 0.002, 18.0686]} icon={customIcon} />
              </>
            )
          }
        </MapContainer>
      </div>
      <button onClick={() => setShowPins(true)} className="z-20 absolute bottom-4 right-4">Drop Pins</button>
    </div>
  );
}

export default MapDemo;

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
    <div className="flex flex-col items-center justify-center h-screen lg:ml-72 z-40 relative">
     <div className="relative ipad-frame w-[60vw] h-[45vw] md:w-[50vw] md:h-[37.5vw] lg:w-[40vw] lg:h-[30vw] rounded-xl bg-black overflow-hidden border-8 border-black shadow-xl">
    <div className="absolute inset-0 md:inset-2 rounded-sm overflow-hidden">
        <MapContainer center={centerCoordinates} zoom={zoomLevel} className="h-full w-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=''
          />
          <CircleMarker center={centerCoordinates} radius={20} color="blue" fillColor="blue" fillOpacity={0.6} />
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
        
      </div>
      <button onClick={() => setShowPins(true)} className='mt-4'>Nearest Net</button>
    </div>
  );
}

export default MapDemo;

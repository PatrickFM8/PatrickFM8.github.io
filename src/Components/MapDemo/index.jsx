import React, { useState,useRef } from 'react';
import { MapContainer, TileLayer, CircleMarker, Marker, Polyline,Polygon,useMapEvents,FeatureGroup  } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-geometryutil';

function MapDemo() {
  const centerCoordinates = [59.3293, 18.0686];
  const zoomLevel = 13;
  const [mousePosition, setMousePosition] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [clickedInsideArea, setClickedInsideArea] = useState(null);
  const [customPolygons, setCustomPolygons] = useState([]);
  const drawnItemsRef = useRef(new L.FeatureGroup());
  const clearDrawings = () => {
    setCustomPolygons([]);
    setSelectedArea(null); // Reset selectedArea
    setClickedInsideArea(null)
    drawnItemsRef.current.clearLayers();
  };
  const markersData = [
    {
      position: [59.32012, 18.07049],
      color: 'blue',
      label: '1'
    },
    {
      position: [59.3293, 18.0686],
      color: 'green',
      label: '2'
    },
    {
      position: [59.31196,18.02866],
      color: 'blue',
      label: '3'
    },
    {
      position: [59.32897717096631, 18.06874745736087],
      color: 'green',
      label: '4'
    },
    
    {
      position: [59.32939417612803, 18.069073199501186],
      color: 'blue',
      label: '6'
    },
    {
      position: [59.32888726331887, 18.067361790893086],
      color: 'green',
      label: '7'
    },
    {
      position: [59.33016972079372, 18.068470907017757],
      color: 'green',
      label: '8'
    },
    {
      position: [59.32848989086263, 18.07088131676859],
      color: 'blue',
      label: '9'
    },
    {
      position: [59.32963586552297, 18.067303587482766],
      color: 'green',
      label: '10'
    },
    
   
  ];
  function MousePosition() {
    const map = useMapEvents({
        mousemove(e) {
            setMousePosition(e.latlng);
        },
        mouseout() {
            setMousePosition(null);
        },
        click(e) {
          setClickedPosition(e.latlng);
      }
    });
    return null;
}
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
  const [showAreas, setShowAreas] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  // Define coordinates for the highlighted areas (example)
 /* const area1Coordinates = [
    [59.3170, 18.0580],
    [59.3200, 18.0650],
    [59.3140, 18.0700],
    [59.3110, 18.0610],
  ];

  const area2Coordinates = [
    [59.3080, 18.0700],
    [59.3100, 18.0770],
    [59.3060, 18.0750],
    [59.3040, 18.0740],
  ];
  const area3Coordinates = [
    [59.31119, 18.03075],
    [59.31137, 18.03099],
    [59.31093, 18.03216],
    [59.31073, 18.03199],
  ];*/
  

  const polylineCoordinates = [
    [59.3293, 18.0686],
    [59.3293 + 0.002, 18.0686],
    [59.3293 - 0.002, 18.0686],
  ];

  const calculateDistance = (latlng1, latlng2) => {
    if (!latlng1 || !latlng2) return 0;
    return L.latLng(latlng1).distanceTo(latlng2);
  };
  
 
  const calculatePolygonArea = (coordinates) => {
    const latlngs = coordinates.map(coord => new L.LatLng(coord[0], coord[1]));
    // Calculate the geodesic area using Leaflet's utility
    const area = L.GeometryUtil.geodesicArea(latlngs);
    return area;  // The area is in square meters
  }
  const onPolygonClick = (event, area) => {
    console.log("Polygon clicked!");
    console.log("Full event object:", event);
    setClickedInsideArea(event.latlng);
    const coordinates = area.coordinates ? area.coordinates : customPolygons;
    if (!coordinates) {
        console.error("Coordinates are not available");
        return;
    }
    const latlngs = coordinates.map(coord => new L.LatLng(coord[0], coord[1]));
    const polygonArea = L.GeometryUtil.geodesicArea(latlngs);
    setSelectedArea({
      ...area, // Use the 'area' object passed into the function
      area: `${polygonArea.toFixed(2)} m^2`
    });
    // Calculate nearest markers immediately using the event.latlng
    const immediateNearestMarkers = markersData
      .map(marker => ({
          ...marker,
          distance: calculateDistance(event.latlng, marker.position)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 2);

    console.log(immediateNearestMarkers);  // This will print the two nearest markers with distances
};
  

  const nearestMarkers = markersData
    .map(marker => ({
        ...marker,
        distance: calculateDistance(clickedInsideArea, marker.position)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 2);

    const onDrawCreate = (e) => {
      const type = e.layerType,
            layer = e.layer;
    
      if (type === 'polygon') {
        const coordinates = layer.getLatLngs()[0].map(coord => [coord.lat, coord.lng]);
        const calculatedArea = calculatePolygonArea(coordinates);
        // Do something with the coordinates, e.g., set them in the state
        setCustomPolygons(prevPolygons => [...prevPolygons, coordinates]);
        // Hardcode your polygon data
        setSelectedArea({
          area: `${calculatedArea.toFixed(2)} m^2`,
          value: "60 000 SEK / m^2",
          owner: "Custom Owner",
          ownerContact: "Custom John",
          ownerEmail: "customjohn@example.com",
          gridoperator: "Vattenfall",
          gridContact: "John Doe",
          gridEmail: "john.doe@vattenfall.com"
        });
        drawnItemsRef.current.addLayer(layer);
      }
    };
  return (
    <div className="flex flex-col items-center justify-center w-[120vh] h-[80vh] mt-20 mr-20 lg:ml-72 z-40 relative">
    <div className="relative ipad-frame w-full h-full rounded-xl bg-black overflow-hidden border-8 border-black shadow-xl">
    <div className="absolute inset-0 md:inset-2 rounded-sm overflow-hidden">
    {mousePosition && (
                <div className='text-white hidden'>
                    <p>Mouse Latitude: {mousePosition.lat.toFixed(5)}</p>
                    <p>Mouse Longitude: {mousePosition.lng.toFixed(5)}</p>
                </div>
            )}
         {clickedPosition && (
                <div className='text-white hidden'>
                    <p>Clicked Latitude: {clickedPosition.lat.toFixed(5)}</p>
                    <p>Clicked Longitude: {clickedPosition.lng.toFixed(5)}</p>
                    </div>
            )}   
        <MapContainer center={centerCoordinates} zoom={zoomLevel} className="h-full w-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=''
          />

<FeatureGroup ref={drawnItemsRef}>
  <EditControl
    position="topright"
    onCreated={onDrawCreate}
    draw={{
      rectangle: false,
      polyline: false,
      circle: false,
      circlemarker: false,
      marker: false
    }}
  />
</FeatureGroup>
        <MousePosition />
       

       {
        clickedInsideArea && markersData.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={L.divIcon({
              className: `bg-${marker.color}-500 rounded-full w-10 h-10 text-black font-semibold text-center`,
              html: `<div class="w-8 h-8 mx-auto my-1">${marker.label}</div>`,
            })}
          />
          
        ))
      }
      {
  clickedInsideArea && nearestMarkers.map((marker, index) => (
    <Polyline 
      key={index}
      positions={[clickedInsideArea, marker.position]} 
      color="purple" 
    />
  ))
}


{customPolygons.map((polygon, index) => (
  <Polygon 
    key={index}
    positions={polygon} 
    color="yellow" 
    fillOpacity={0.1}
    eventHandlers={{
      click: (e) => onPolygonClick(e, selectedArea) // Use your existing onPolygonClick handler
    }}
  />
))}

          
            
        </MapContainer>
        
        </div>
       
      </div>
      {selectedArea && (
  <div className="w-full justify-center items-stretch p-4 z-100 flex flex-wrap">
    <div className="card flex flex-col flex-1 m-2 p-2 border bg-white rounded shadow-lg flex-grow">
      <h2 className='text-xl text-center'>Area</h2>
      <div className="content-container flex flex-col justify-center flex-grow items-center">
        <p className='text-xl font-bold'>{selectedArea.area}</p>
      </div>
    </div>
    <div className="card flex flex-col flex-1 m-2 p-2 border bg-white rounded shadow-lg flex-grow">
      <h2 className='text-xl text-center'>Landvärde</h2>
      <div className="content-container flex flex-col justify-center flex-grow items-center">
        <p className='text-xl font-bold'>{selectedArea.value}</p>
      </div>
    </div>
    <div className="card flex flex-col flex-1 m-2 p-2 border bg-white rounded shadow-lg flex-grow">
      <h2 className='text-xl text-center'>Ägare</h2>
      <div className="content-container flex flex-col justify-center flex-grow items-center">
        <p className='text-xl font-bold'>{selectedArea.owner}</p>
        <p className='text-xl font-bold'>{selectedArea.ownerContact}</p>
        <p className='text-xl font-bold'>{selectedArea.ownerEmail}</p>
      </div>
    </div>
    <div className="card flex flex-col flex-1 m-2 p-2 border bg-white rounded shadow-lg flex-grow">
      <h2 className='text-xl text-center'>Nätoperatör</h2>
      <div className="content-container flex flex-col justify-center flex-grow items-center">
        <p className='text-xl font-bold'>{selectedArea.gridoperator}</p>
        <p className='text-xl font-bold'>{selectedArea.gridContact}</p>
        <p className='text-xl font-bold'>{selectedArea.gridEmail}</p>
      </div>
    </div>
    <div className="card flex flex-col flex-1 m-2 p-2 border bg-white rounded shadow-lg flex-grow">
      <h2 className='text-xl text-center'>Nätstationer</h2>
      <div className="content-container flex flex-col justify-center flex-grow items-center overflow">
        {nearestMarkers.map((marker, index) => (
            <div key={index} className="flex items-center mb-2">
                <div
                  className={`bg-${marker.color}-500 rounded-full w-8 h-8 text-black font-semibold text-center mr-2 `}
                  dangerouslySetInnerHTML={{ __html: `<div class="w-8 h-8 mx-auto my-1">${marker.label}</div>` }}
                />
                {(marker.distance.toFixed(2)) + " meters"}
            </div>
        ))}
      </div>
    </div>
  </div>
)}
      <button
        onClick={() => setShowAreas(!showAreas)}
        className="mt-4 px-6 py-2 border rounded bg-green-500 text-white hover:bg-green-600 transition hidden"
      >
        {showAreas ? "Hide Highlighted Areas" : "Show Highlighted Areas"}
      </button>
      <button
  onClick={clearDrawings}
  className="mt-4 px-6 py-2 border rounded bg-red-500 text-white hover:bg-red-600 transition"
>
  Clear Drawings
</button>
    </div>
  );
}

export default MapDemo;

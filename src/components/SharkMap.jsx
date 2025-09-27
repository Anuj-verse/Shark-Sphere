import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom shark icon
const sharkIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
      <defs>
        <linearGradient id="sharkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M20 50 L35 40 L50 45 L65 35 L80 50 L65 65 L50 55 L35 60 Z" 
            fill="url(#sharkGradient)" 
            stroke="#1e3a8a" 
            stroke-width="2"/>
      <circle cx="35" cy="45" r="3" fill="white"/>
      <circle cx="33" cy="43" r="1" fill="black"/>
    </svg>
  `),
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

const SharkMap = ({ sharks, loading, onGetStarted }) => {
  if (!sharks || sharks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-image bg-cover bg-center" style={{ backgroundImage: 'url(/shark.jpg)' }}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">🦈 Shark Sphere</h2>
          <p className="text-gray-300 mb-6 max-w-md">
            Discover real-time shark tracking data from around the world. 
            Click below to start exploring shark movements and conservation efforts.
          </p>
          <button
            onClick={onGetStarted}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto cursor-pointer"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white cursor-pointer"></div>
                Loading...
              </>
            ) : (
              <>
                🦈 Get Started
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    
    <div className="w-screen h-screen z-1000">
      <MapContainer
        center={[25.7617, -80.1918]} // Default to Florida Keys area
        zoom={5}
        style={{ height: '100vh', width: '100vw' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {sharks.map((shark) => (
          <Marker
            key={shark.id}
            position={[shark.latitude, shark.longitude]}
            icon={sharkIcon}
          >
            <Popup className="shark-popup">
              <div className="p-2 min-w-48">
                <h3 className="font-bold text-lg text-blue-800 mb-2">{shark.name}</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold">Species:</span> {shark.species}</p>
                  <p><span className="font-semibold">Length:</span> {shark.length}</p>
                  <p><span className="font-semibold">Weight:</span> {shark.weight}</p>
                  <p><span className="font-semibold">Gender:</span> {shark.gender}</p>
                  <p><span className="font-semibold">Tag Date:</span> {shark.tagDate}</p>
                  <p><span className="font-semibold">Last Ping:</span> {shark.lastPing}</p>
                  <p><span className="font-semibold">Location:</span> {shark.location}</p>
                  {shark.depth && (
                    <p><span className="font-semibold">Depth:</span> {shark.depth}</p>
                  )}
                  {shark.temperature && (
                    <p><span className="font-semibold">Water Temp:</span> {shark.temperature}</p>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SharkMap;

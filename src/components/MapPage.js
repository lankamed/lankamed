import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import '../assets/css/MapPage.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/track-logins');
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchUsers();
  }, []);

  console.log('Users state:', users);

  if (users.length === 0) {
    console.log('No users data available');
  }

  return (
    <div className="map-page-container">
      <h2>Users Map</h2>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {users.map((user) => (
          user.location && user.location.latitude && user.location.longitude ? (
            <Marker key={user._id} position={[user.location.latitude, user.location.longitude]}>
              <Popup>
                <div>
                  <p><strong>Username:</strong> {user.name}</p>
                  <p><strong>IP:</strong> {user.ip}</p>
                  <p>
                    <strong>Status:</strong> 
                    <span style={{ color: user.approve ? 'green' : 'red' }}>
                      {user.approve ? 'Approved' : 'Declined'}
                    </span>
                  </p>
                  <p style={{ color: user.approve ? 'black' : 'red' }}>
                    <strong>Location:</strong> {user.location.latitude}, {user.location.longitude}
                  </p>
                </div>
              </Popup>
            </Marker>
          ) : (
            console.log(`User ${user.name} does not have a valid location`)
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;

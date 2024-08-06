import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/TrackLogins.css';

const TrackLogins = () => {
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/track-logins');
        setLoginData(response.data);
      } catch (error) {
        console.error('Error fetching login data:', error);
      }
    };

    fetchLoginData();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/track-logins/${id}`, { approve: true });
      setLoginData((prevData) =>
        prevData.map((login) => (login._id === id ? { ...login, approve: true } : login))
      );
      alert('Login approved');
    } catch (error) {
      console.error('Error approving login:', error);
    }
  };

  const handleDecline = async (id) => {
    try {
      await axios.put(`http://localhost:5000/track-logins/${id}`, { approve: false });
      setLoginData((prevData) =>
        prevData.map((login) => (login._id === id ? { ...login, approve: false } : login))
      );
      alert('Login declined');
    } catch (error) {
      console.error('Error declining login:', error);
    }
  };

  return (
    <div className="track-logins-container">
      <h2>Track Logins</h2>
      <table>
        <thead>
          <tr>
            <th>User Role</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User IP</th>
            <th>User Geo Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((login) => (
            <tr key={login._id}>
              <td>{login.role}</td>
              <td>{login.name}</td>
              <td>{login.email}</td>
              <td>{login.ip}</td>
              <td>
                {login.location.latitude && login.location.longitude
                  ? `${login.location.latitude}, ${login.location.longitude}`
                  : 'Location not available'}
              </td>
              <td>{login.approve ? 'Approved' : 'Pending'}</td>
              <td>
                <button className="approve-btn" onClick={() => handleApprove(login._id)} disabled={login.approve === true}>
                  Approve
                </button>
                <button className="decline-btn" onClick={() => handleDecline(login._id)}>
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackLogins;

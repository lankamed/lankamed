import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', latitude: null, longitude: null });
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log('Login successful:', response.data);
      setUserId(response.data._id);
      setIsLoading(true);
      console.log('Set User ID:', response.data._id);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  useEffect(() => {
    const checkApprovalStatus = async () => {
      if (isLoading && userId) {
        try {
          console.log(`Checking approval status for userId: ${userId}`);
          const response = await axios.get(`http://localhost:5000/track-logins?userId=${userId}`);
          console.log('Approval status response:', response.data);
          if (response.data.length > 0 && response.data[0].approve) {
            console.log('User approved');
            setIsLoading(false);
            navigate('/home');
          }
        } catch (error) {
          console.error('Error checking approval status:', error);
        }
      }
    };

    const interval = setInterval(checkApprovalStatus, 2000);

    return () => clearInterval(interval);
  }, [isLoading, userId, navigate]);

  return (
    <div className="login-page">
      <div className="login-container">
        {isLoading ? (
          <div>
            <h2>Waiting for approval...</h2>
            <p>Please wait while your login is being approved by the admin.</p>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn">Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

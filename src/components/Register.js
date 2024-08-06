import React, { useState } from 'react';
import '../assets/css/Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Admin',
    geoRange: 'Hospital',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('User registered successfully');
    } catch (error) {
      console.error('Error registering user', error);
      alert('Error registering user');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Tracking Manager">Tracking Manager</option>
            <option value="Nurse">Nurse</option>
            <option value="OPD">OPD</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="geoRange">Geo Location Area Range</label>
          <select
            id="geoRange"
            name="geoRange"
            value={formData.geoRange}
            onChange={handleChange}
            required
          >
            <option value="Hospital">Hospital</option>
            <option value="Local">Local</option>
            <option value="International">International</option>
          </select>
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;

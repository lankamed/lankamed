import React, { useState } from 'react';
import '../assets/css/RegisterPatient.css';

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    nic: '',
    dob: '',
    gender: '',
    guardianName: '',
    relationship: '',
    address: '',
    contactNumber: '',
    email: '',
    occupation: '',
    insurance: '',
    referringDoctor: '',
    emergencyContactName: '',
    emergencyRelationship: '',
    emergencyContactNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register-patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Patient registered successfully!');
      } else {
        alert('Error registering patient.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering patient.');
    }
  };
  return (
    <div className="register-patient-container">
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="nic">NIC</label>
            <input type="text" id="nic" name="nic" value={formData.nic} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="guardianName">Guardian's Name (if minor)</label>
            <input type="text" id="guardianName" name="guardianName" value={formData.guardianName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship with Patient</label>
            <input type="text" id="relationship" name="relationship" value={formData.relationship} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="insurance">Health Insurance Details (if applicable)</label>
            <input type="text" id="insurance" name="insurance" value={formData.insurance} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="referringDoctor">Referring Doctor's Name (if applicable)</label>
            <input type="text" id="referringDoctor" name="referringDoctor" value={formData.referringDoctor} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="emergencyContactName">Emergency Contact Name</label>
            <input type="text" id="emergencyContactName" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="emergencyRelationship">Relationship</label>
            <input type="text" id="emergencyRelationship" name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
            <input type="tel" id="emergencyContactNumber" name="emergencyContactNumber" value={formData.emergencyContactNumber} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterPatient;

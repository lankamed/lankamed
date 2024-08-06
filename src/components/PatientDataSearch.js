import React from 'react';
import '../assets/css/PatientDataSearch.css';

const PatientDataSearch = () => {
  return (
    <div className="patient-data-search-container">
      <h2>Patient Data Search</h2>
      <form>
        <div className="form-group">
          <label htmlFor="patientId">Patient ID</label>
          <input type="text" id="patientId" name="patientId" required />
        </div>
        <button type="submit" className="btn">Search</button>
      </form>
    </div>
  );
};

export default PatientDataSearch;

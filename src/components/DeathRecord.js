import React from 'react';
import '../assets/css/DeathRecord.css';

const DeathRecord = () => {
  return (
    <div className="death-record-container">
      <h2>Death Record</h2>
      <form>
        <div className="form-group">
          <label htmlFor="patientId">Patient ID</label>
          <input type="text" id="patientId" name="patientId" required />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfDeath">Date of Death</label>
          <input type="date" id="dateOfDeath" name="dateOfDeath" required />
        </div>
        <button type="submit" className="btn">Record Death</button>
      </form>
    </div>
  );
};

export default DeathRecord;

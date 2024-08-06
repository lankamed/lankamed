import React from 'react';
import '../assets/css/AddDischargeRecord.css';

const AddDischargeRecord = () => {
  return (
    <div className="add-discharge-record-container">
      <h2>Add Discharge Record</h2>
      <form>
        {/* Patient Details */}
        <div className="section">
          <h3>Patient Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nic">NIC</label>
              <input type="text" id="nic" name="nic" required />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="middleInitial">Middle Initial</label>
              <input type="text" id="middleInitial" name="middleInitial" />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Sex</label>
              <select id="sex" name="sex" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input type="text" id="zip" name="zip" required />
            </div>
          </div>
        </div>

        {/* Primary Health Care Professional Details */}
        <div className="section">
          <h3>Primary Health Care Professional Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="doctorFirstName">First Name</label>
              <input type="text" id="doctorFirstName" name="doctorFirstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="doctorLastName">Last Name</label>
              <input type="text" id="doctorLastName" name="doctorLastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="doctorMiddleInitial">Middle Initial</label>
              <input type="text" id="doctorMiddleInitial" name="doctorMiddleInitial" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="hospitalName">Hospital/Clinic Name</label>
              <input type="text" id="hospitalName" name="hospitalName" required />
            </div>
            <div className="form-group">
              <label htmlFor="doctorAddress">Address</label>
              <input type="text" id="doctorAddress" name="doctorAddress" required />
            </div>
            <div className="form-group">
              <label htmlFor="doctorCity">City</label>
              <input type="text" id="doctorCity" name="doctorCity" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="doctorState">State</label>
              <input type="text" id="doctorState" name="doctorState" required />
            </div>
            <div className="form-group">
              <label htmlFor="doctorZip">Zip</label>
              <input type="text" id="doctorZip" name="doctorZip" required />
            </div>
          </div>
        </div>

        {/* Admission and Discharge Details */}
        <div className="section">
          <h3>Admission and Discharge Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="admissionDate">Date of Admission</label>
              <input type="date" id="admissionDate" name="admissionDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="dischargeDate">Date of Discharge</label>
              <input type="date" id="dischargeDate" name="dischargeDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="methodOfAdmission">Method of Admission</label>
              <input type="text" id="methodOfAdmission" name="methodOfAdmission" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dischargeReason">Discharge Reason</label>
              <select id="dischargeReason" name="dischargeReason" required>
                <option value="treated">Treated</option>
                <option value="transferred">Transferred</option>
                <option value="dischargeAgainstAdvice">Discharge Against Advice</option>
                <option value="patientDied">Patient Died</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dateOfDeath">Date of Death (if applicable)</label>
              <input type="date" id="dateOfDeath" name="dateOfDeath" />
            </div>
            <div className="form-group">
              <label htmlFor="sourceOfReferral">Source of Referral</label>
              <input type="text" id="sourceOfReferral" name="sourceOfReferral" />
            </div>
          </div>
        </div>

        {/* Diagnosis & Procedures */}
        <div className="section">
          <h3>Diagnosis & Procedures</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="diagnosis">Diagnosis</label>
              <input type="text" id="diagnosis" name="diagnosis" required />
            </div>
            <div className="form-group">
              <label htmlFor="procedures">Operation & Procedures</label>
              <input type="text" id="procedures" name="procedures" required />
            </div>
          </div>
        </div>

        {/* Medication Details */}
        <div className="section">
          <h3>Medication Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="medication">Medication on Discharge</label>
              <textarea id="medication" name="medication" required></textarea>
            </div>
          </div>
        </div>

        {/* Prepared By */}
        <div className="section">
          <h3>Prepared By</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signature">Signature</label>
              <button type="button" id="signature" className="btn">Click Here to Sign</button>
            </div>
            <div className="form-group">
              <label htmlFor="preparerName">Name</label>
              <input type="text" id="preparerName" name="preparerName" required />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" required />
            </div>
            <div className="form-group">
              <label htmlFor="preparerDate">Date</label>
              <input type="date" id="preparerDate" name="preparerDate" required />
            </div>
          </div>
        </div>

        <button type="submit" className="btn">Add Discharge Record</button>
      </form>
    </div>
  );
};

export default AddDischargeRecord;

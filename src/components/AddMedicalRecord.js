import React from 'react';
import '../assets/css/AddMedicalRecord.css';

const AddMedicalRecord = () => {
  return (
    <div className="add-medical-record-container">
      <h2>Add Medical Record</h2>
      <form>
        {/* Personal Information */}
        <div className="section">
          <h3>Personal Information</h3>
          <div className="form-row">
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
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-row">
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
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" id="zipCode" name="zipCode" required />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="section">
          <h3>Emergency Contact</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="emergencyContactName">Full Name</label>
              <input type="text" id="emergencyContactName" name="emergencyContactName" required />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyRelationship">Relationship</label>
              <input type="text" id="emergencyRelationship" name="emergencyRelationship" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="emergencyContactNumber">Contact Number</label>
              <input type="tel" id="emergencyContactNumber" name="emergencyContactNumber" required />
            </div>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="section">
          <h3>Insurance Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="insuranceProvider">Insurance Provider</label>
              <input type="text" id="insuranceProvider" name="insuranceProvider" />
            </div>
            <div className="form-group">
              <label htmlFor="policyNumber">Policy Number</label>
              <input type="text" id="policyNumber" name="policyNumber" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="groupNumber">Group Number</label>
              <input type="text" id="groupNumber" name="groupNumber" />
            </div>
          </div>
        </div>

        {/* Health Information */}
        <div className="section">
          <h3>Health Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="knownMedicalConditions">Known Medical Conditions</label>
              <textarea id="knownMedicalConditions" name="knownMedicalConditions"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="allergies">Allergies</label>
              <textarea id="allergies" name="allergies"></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="medications">Current Medications</label>
              <textarea id="medications" name="medications"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="immunizationStatus">Immunization Status</label>
              <textarea id="immunizationStatus" name="immunizationStatus"></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea id="additionalNotes" name="additionalNotes"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="btn">Add Record</button>
      </form>
    </div>
  );
};

export default AddMedicalRecord;

import React from 'react';
import '../assets/css/PatientDetails.css';

const PatientDetails = ({ patient }) => {
  const patientData = patient || {
    id: '12345',
    name: 'John Doe',
    nic: '985385325v',
    dateOfBirth: '1998-01-01',
    gender: 'Male',
    address: '123 Main St, Anytown, USA',
    contactNumber: '555-1234',
    email: 'john.doe@example.com',
    guardianName: 'Jane Doe',
    relationship: 'Mother',
    occupation: 'Engineer',
    insurance: 'XYZ Insurance',
    referringDoctor: 'Dr. Smith',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Wife',
      contactNumber: '555-5678',
    },
  };

  return (
    <div className="patient-details-container">
      <h2>Patient Details</h2>
      <div className="table-wrapper">
        <table className="patient-details-table">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>NIC</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Guardian Name</th>
              <th>Relationship</th>
              <th>Occupation</th>
              <th>Insurance</th>
              <th>Referring Doctor</th>
              <th>Emergency Contact Name</th>
              <th>Emergency Contact Relationship</th>
              <th>Emergency Contact Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{patientData.id}</td>
              <td>{patientData.name}</td>
              <td>{patientData.nic}</td>
              <td>{patientData.dateOfBirth}</td>
              <td>{patientData.gender}</td>
              <td>{patientData.address}</td>
              <td>{patientData.contactNumber}</td>
              <td>{patientData.email}</td>
              <td>{patientData.guardianName}</td>
              <td>{patientData.relationship}</td>
              <td>{patientData.occupation}</td>
              <td>{patientData.insurance}</td>
              <td>{patientData.referringDoctor}</td>
              <td>{patientData.emergencyContact.name}</td>
              <td>{patientData.emergencyContact.relationship}</td>
              <td>{patientData.emergencyContact.contactNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientDetails;

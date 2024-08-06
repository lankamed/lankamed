import React from 'react';
import '../assets/css/MedicalDetails.css';

const MedicalDetails = ({ medicalRecord }) => {
  const medicalData = medicalRecord || {
    recordId: 'MR12345',
    patientId: '12345',
    name: 'John Doe',
    dateOfBirth: '1980-01-01',
    gender: 'Male',
    address: '123 Main St, Anytown, USA',
    contactNumber: '555-1234',
    email: 'john.doe@example.com',
    guardianName: 'Jane Doe',
    relationship: 'Mother',
    occupation: 'Engineer',
    insurance: 'XYZ Insurance',
    referringDoctor: 'Dr. John Smith',
    emergencyContactName: 'Jane Doe',
    emergencyContactRelationship: 'Wife',
    emergencyContactNumber: '555-5678',
    diagnosis: 'Hypertension',
    treatment: 'Medication, Lifestyle changes',
    medications: 'Amlodipine 5mg, Lisinopril 10mg',
    date: '2024-07-30',
    doctor: 'Dr. John Smith',
    hospital: 'General Hospital',
    notes: 'Patient advised to reduce salt intake and exercise regularly.',
  };

  return (
    <div className="medical-details-container">
      <h2>Medical Details</h2>
      <div className="table-wrapper">
        <table className="medical-details-table">
          <thead>
            <tr>
              <th>Record ID</th>
              <th>Patient ID</th>
              <th>Name</th>
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
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Medications</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>Hospital</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{medicalData.recordId}</td>
              <td>{medicalData.patientId}</td>
              <td>{medicalData.name}</td>
              <td>{medicalData.dateOfBirth}</td>
              <td>{medicalData.gender}</td>
              <td>{medicalData.address}</td>
              <td>{medicalData.contactNumber}</td>
              <td>{medicalData.email}</td>
              <td>{medicalData.guardianName}</td>
              <td>{medicalData.relationship}</td>
              <td>{medicalData.occupation}</td>
              <td>{medicalData.insurance}</td>
              <td>{medicalData.referringDoctor}</td>
              <td>{medicalData.emergencyContactName}</td>
              <td>{medicalData.emergencyContactRelationship}</td>
              <td>{medicalData.emergencyContactNumber}</td>
              <td>{medicalData.diagnosis}</td>
              <td>{medicalData.treatment}</td>
              <td>{medicalData.medications}</td>
              <td>{medicalData.date}</td>
              <td>{medicalData.doctor}</td>
              <td>{medicalData.hospital}</td>
              <td>{medicalData.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalDetails;

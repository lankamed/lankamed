import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import RegisterPatient from './components/RegisterPatient';
import AddMedicalRecord from './components/AddMedicalRecord';
import PatientDetails from './components/PatientDetails';
import MedicalDetails from './components/MedicalDetails';
import DoctorsDetails from './components/DoctorsDetails';
import PatientDataSearch from './components/PatientDataSearch';
import ICUBedManagement from './components/ICUBedManagement';
import DeathRecord from './components/DeathRecord';
import DischargeRecords from './components/DischargeRecords';
import AddDischargeRecord from './components/AddDischargeRecord';
import Sidebar from './components/Sidebar';
import './App.css';
import TrackLogins from './components/TrackLogins';
import MapPage from './components/MapPage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && <Sidebar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/add-medical-record" element={<AddMedicalRecord />} />
          <Route path="/patient-details" element={<PatientDetails />} />
          <Route path="/medical-details" element={<MedicalDetails />} />
          <Route path="/doctors-details" element={<DoctorsDetails />} />
          <Route path="/patient-data-search" element={<PatientDataSearch />} />
          <Route path="/icu-bed-management" element={<ICUBedManagement />} />
          <Route path="/death-record" element={<DeathRecord />} />
          <Route path="/discharge-records" element={<DischargeRecords />} />
          <Route path="/add-discharge-record" element={<AddDischargeRecord />} />
          <Route path="/track-logins" element={<TrackLogins />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

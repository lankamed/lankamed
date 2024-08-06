import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faUser, faFileMedical, faClipboardList, faSearch, faBed, faHeartbeat, faNotesMedical, faLocation, faMap } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Lanka MED</h2>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} className="icon" /> Home
          </Link>
        </li>
        
        <li className="sidebar-heading">User Management</li>
        <li>
          <Link to="/register">
            <FontAwesomeIcon icon={faUserPlus} className="icon" /> Register
          </Link>
        </li>
        <li>
          <Link to="/register-patient">
            <FontAwesomeIcon icon={faUser} className="icon" /> Register Patient
          </Link>
        </li>

        <li className="sidebar-heading">Medical Records</li>
        <li>
          <Link to="/add-medical-record">
            <FontAwesomeIcon icon={faFileMedical} className="icon" /> Add Medical Record
          </Link>
        </li>
        <li>
          <Link to="/medical-details">
            <FontAwesomeIcon icon={faClipboardList} className="icon" /> Medical Details
          </Link>
        </li>
        <li>
          <Link to="/discharge-records">
            <FontAwesomeIcon icon={faNotesMedical} className="icon" /> Discharge Records
          </Link>
        </li>
        <li>
          <Link to="/add-discharge-record">
            <FontAwesomeIcon icon={faNotesMedical} className="icon" /> Add Discharge Record
          </Link>
        </li>

        <li className="sidebar-heading">Patient Information</li>
        <li>
          <Link to="/patient-details">
            <FontAwesomeIcon icon={faClipboardList} className="icon" /> Patient Details
          </Link>
        </li>
        <li>
          <Link to="/patient-data-search">
            <FontAwesomeIcon icon={faSearch} className="icon" /> Patient Data Search
          </Link>
        </li>
        <li>
          <Link to="/icu-bed-management">
            <FontAwesomeIcon icon={faBed} className="icon" /> ICU Bed Management
          </Link>
        </li>
        <li>
          <Link to="/death-record">
            <FontAwesomeIcon icon={faHeartbeat} className="icon" /> Death Record
          </Link>
        </li>

        <li className="sidebar-heading">Staff Information</li>
        <li>
          <Link to="/doctors-details">
            <FontAwesomeIcon icon={faNotesMedical} className="icon" /> Doctors Details
          </Link>
        </li>
        <li>
          <Link to="/track-logins">
            <FontAwesomeIcon icon={faLocation} className="icon" />Track Logins
          </Link>
        </li>
        <li>
          <Link to="/map">
            <FontAwesomeIcon icon={faMap} className="icon" /> Map
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import logo from '../../assets/logo2.png';
import './home.css'; // Import your CSS file


function Navbar() {
    return (
      <div>
        <div className="navbar">
          <img src={logo} id='logo'/>
          <div className="nav-buttons">
            <a href="#" className="nav-button">Home</a>
            <a href="#" className="nav-button">Register Case</a>
            <a href="#" className="nav-button">View Cases</a>
            <a href="#" className="nav-button">Logout</a>
          </div>
        </div>
        <div className="navbar1">
          <h4>Dashboard</h4>
          <h4>Registrar: aimers</h4>
        </div>
        <div className="background">
          <h1>Electronic Court Case Management System</h1>
          <h3>These system Electronic Court Case Management System (ECCMS) controls and allows complete registration of all court case which are related to the court case by the domain users who can modify, delete and update a case that causelist. The flow of information provides communication and notification between the courts and public.</h3>
        </div>
        <div className="card-container">
          <div className="card1">
            <h4>REGISTRATION</h4>
            <p>The software will allow users to enter information, control the flow of information in the system and track current case status and location to enhance public access</p>
          </div>
          <div className="card2">
            <h4>EVENT AND SCHEDULING</h4>
            <p>The system determines new case arrivals, session appointments, case deadline, reservation of courtroom and the judge who will head the case.</p>
          </div>
          <div className="card3">
            <h4>SECURITY</h4>
            <p>The system Security has the ability to ascertain the control access of the application between both user's domain account and public access to maintain its integrity.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  
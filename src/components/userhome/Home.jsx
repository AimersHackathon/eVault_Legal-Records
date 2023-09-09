import React from 'react';
import './home.css'; 

function UserDashboard() {
  return (
    <div>
      <section id="header">
        <a href="#"><img src="img/logo.png" className="logo" alt="" /></a>

        <div>
          <ul id="navbar">
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="shop.html">View Cases</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Login</a></li>
          </ul>
        </div>
      </section>

      <section id="hero">
        <h4>Welcome to Case Information System</h4>
        <h2>Legal Records Storage Solution</h2>
        <h1>E-Legal Records Repository</h1>
        <h4>Secure Legal Document Storage</h4>
        <button>Register Now</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="img/features/f1.png" alt="" />
          <h6>Access Control</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f2.png" alt="" />
          <h6>Encryption and Security</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f3.png" alt="" />
          <h6>Integration with Case Management Systems</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f4.png" alt="" />
          <h6>Mobile Access</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f5.png" alt="" />
          <h6>Notifications and Alerts</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f6.png" alt="" />
          <h6>Full 24/7 Support</h6>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;

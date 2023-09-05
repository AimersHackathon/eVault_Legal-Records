import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import {FaFacebookF} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import './login.css';

function LoginForm() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState(false);

  const showRegistrationForm = () => {
    setIsLoginFormVisible(false);
    setIsRegistrationFormVisible(true);
  };

  const showLoginForm = () => {
    setIsRegistrationFormVisible(false);
    setIsLoginFormVisible(true);
  };

  return (
    <div>
      {/* A4 Sheet Divs */}
      <div className="a4-sheet1"></div>
      <div className="a4-sheet2"></div>
      <div className="a4-sheet3"></div>
      <div className="a4-sheet4"></div>
      <div className="a4-sheet5"></div>
      <div className="a4-sheet6"></div>
      <div className="a4-sheet7"></div>

      {/* Login Form */}
      {isLoginFormVisible && (
        <div className="login-container" id="login-form">
          <div className='logo'>
      <img src={logo}/>
    </div>
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={showRegistrationForm}>
              Register
            </a>
          </p>
          <p className="sign-up">or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
        <a href="https://www.facebook.com" target="_blank">
        <span className="color-icon">
          <FaFacebookF/>
          </span></a>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <a href="https://www.google.com" target="_blank">
          <span className="color-icon">
            <FaGoogle/>
            </span></a>
          </button>

          
        
        </div>
      )}

      {/* Registration Form */}
      {isRegistrationFormVisible && (
        <div className="login-container" id="registration-form">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="new-username">New Username</label>
              <input type="text" id="new-username" required />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">New Password</label>
              <input type="password" id="new-password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" required />
            </div>
            {/* Add additional registration fields as needed */}
            <div className="form-group">
              <button type="submit">Register</button>
            </div>
          </form>
          <p>
            Already have an account?{' '}
            <a href="#" onClick={showLoginForm}>
              Login
            </a>
          </p>
          {/* Add your social login buttons here */}
        </div>
      )}
    </div>
  );
}

export default LoginForm;

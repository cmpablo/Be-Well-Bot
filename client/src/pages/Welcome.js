import React, { Component } from 'react';
import '../assets/css/style.css';
import logo from '../assets/images/logo_stacked_dark.png';

class Welcome extends Component {
  render() {
    return (
      <div className='container'>
        {/* <h4>Welcome to</h4>
        <h1>Be Well Bot</h1> */}
        <div className='welcome-content'>
          <img src={logo} alt='be well bot logo' id='welcome-logo' />
          <br />
          <p>
            A pocket meditation tool to help wipe away the day's stress. Be Well Bot helps you practice meditation whenever and wherever you need it most.
          </p>
          <br />
          <button className='sign-in-btn' id='signInBtn'>Log In</button>
          <button className='sign-up-btn' id='signUpBtn'>Sign Up</button>
        </div>
      </div>
    )
  }
};

export default Welcome;
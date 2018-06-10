import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
//import logo from '../assets/images/logo_stacked_dark.png';

class Welcome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='welcome-content'>
          {/* <img src={logo} alt='be well bot logo' id='welcome-logo' />
          <br /> */}
          <p>
            A pocket meditation tool to help wipe away the day's stress. Be Well Bot helps you practice meditation whenever and wherever you need it most.
          </p>
          <br />
          <Link to='/signin'><button className='sign-in-btn' id='signInBtn'>Log In</button></Link>
          <Link to='/signup'><button className='sign-up-btn' id='signUpBtn'>Sign Up</button></Link>
        </div>
      </div>
    )
  }
};

export default Welcome;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
//import logo from '../assets/images/logo_stacked_dark.png';

class Welcome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='welcome-content'>
        <h3>
          Hello!
        </h3>
          <p>
            Be Well Bot is a pocket meditation tool that helps guide you through meditation and yoga exercises whenever and wherever you are.
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
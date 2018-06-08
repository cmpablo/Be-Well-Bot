import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo_stacked.png';

// Depending on the current path, this component sets the 'active' class on the appropriate navigation link item
const Header = () => (
  <div className='header'>
    <Link className='site-logo' to='/'>
      <img src={logo} alt='be well bot logo' id='logo'/>
    </Link>
    
  </div>
);

export default Header;

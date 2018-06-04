import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo_stacked_white.png';

// Depending on the current path, this component sets the 'active' class on the appropriate navigation link item
const Navbar = props => (
  <nav className='navbar sticky-top mainNav'>
    <Link className='navbar-brand' to='/'>
      <img src={logo} alt='logo' id='logo'/>
    </Link>
    <div>
      <ul>
        <li
          className={window.location.pathname === '/login' || window.location.pathname === '/about' ? 'nav-item active' : 'nav-item'
          }>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </li>
        <li
          className={window.location.pathname === '/signup' ? 'nav-item active' : 'nav-item'
          }>
          <Link to='/signup' className='nav-link'>
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

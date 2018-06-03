import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo_stacked.png';

// Depending on the current path, this component sets the 'active' class on the appropriate navigation link item
const Navbar = props => (
  <nav className='navbar navbar-expand-lg'>
    <Link className='navbar-brand' to='/'>
      <img src={logo} alt='logo' id='logo'/>
    </Link>
    <div>
      <ul className='navbar-nav'>
        <li
          className={window.location.pathname === '/' || window.location.pathname === '/about' ? 'nav-item active' : 'nav-item'
          }>
          <Link to='/' className='nav-link'>
            Login
          </Link>
        </li>
        <li
          className={window.location.pathname === '/discover' ? 'nav-item active' : 'nav-item'
          }>
          <Link to='/discover' className='nav-link'>
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

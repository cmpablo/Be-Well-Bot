import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='mainNav'>
        <ul>
          <Link to='/dashboard'>
          <li><span className="fas fa-list-ul"></span></li>
          </Link>

          <Link to='/menu'>
          <li><span className="far fa-smile"></span></li>
          </Link>
          
          <Link to='/signin'>
          <li><span className="fas fa-sign-out-alt"></span></li>
          </Link>
        </ul>
      </div>
    )
  }
};

export default Navbar;

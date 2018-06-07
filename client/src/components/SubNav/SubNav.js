import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubNav.css';

class SubNav extends Component {
  render() {
    return (
      <div className='subNav'>
        <ul>
          <Link to='/dashboard'>
          <li><span className="fas fa-list-ul"></span></li>
          </Link>

          <Link to='/exercises'>
          <li><span className="far fa-smile"></span></li>
          </Link>
          
          <Link to='/logout'>
          <li><span className="fas fa-sign-out-alt"></span></li>
          </Link>
        </ul>
      </div>
    )
  }
};

export default SubNav;

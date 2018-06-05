import React from 'react';
// import { Link } from 'react-router-dom';
import './SubNav.css';

const SubNav = props => (
  <div className='subNav'>
      <ul>
        <li><a href='/'><span className="fas fa-list-ul"></span></a></li>
        <li><a href='/'><span className="far fa-smile"></span></a></li>
        <li><a href='/'><span className="fas fa-sign-out-alt"></span></a></li>
      </ul>
  </div>
  
);

export default SubNav;

import React from 'react';
//import './../assets/css/style.css';
import Navbar from './../components/Navbar';
import SubNav from './../components/SubNav';

export default ({ }) => {
  return (
    <div className='user-content'>
      <Navbar />
      <SubNav />
      { children }
    </div>
  ) 
};
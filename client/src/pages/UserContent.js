import React from 'react';
//import './../assets/css/style.css';
import requireAuth from './../components/requireAuth';
import Navbar from './../components/Navbar';
import SubNav from './../components/SubNav';


const UserContent = props => (
  <div className='user-content'>
        <Navbar />
        <SubNav />
        {/* { children } */}
      </div>

);

export default requireAuth(UserContent);
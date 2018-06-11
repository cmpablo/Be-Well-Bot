import React from 'react';
import '../assets/css/style.css';
import requireAuth from './../components/requireAuth';
import fiveMins from './../assets/images/min5.png';
import tenMins from './../assets/images/min10.png';
import fifteenMins from './../assets/images/min15.png';

const Menu = () => (
  <div className='container'>
    <h4>
      Exercises
    </h4>
    <p>Before choosing a session, make sure you are in a quiet space away from distraction.</p>
    <h6>Choose a time:</h6>
    <div className='sesh-times'>
      <a href='/'>
        <img src={fiveMins} alt='5mins' />
      </a>
    </div>

    <div className='sesh-times'>
      <a href='/'>
        <img src={tenMins} alt='10mins' />
      </a>
    </div>

      <div className='sesh-times'>
      <a href='/'>
        <img src={fifteenMins} alt='15mins' />
      </a>
    </div>
  </div>
);

export default requireAuth(Menu);
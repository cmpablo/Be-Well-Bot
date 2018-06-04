import React from 'react';
import '../assets/css/style.css';
import fiveMins from './../assets/images/min5.png';
import tenMins from './../assets/images/min10.png';
import fifteenMins from './../assets/images/min15.png';

const Menu = () => (
  <div className='container'>
    <h4>
      Exercises
    </h4>
    <h6>Choose a session:</h6>
    <div className='sesh-times'>
      <a href='/'>
        <img src={fiveMins} alt='5mins' id='image01' />
      </a>
    </div>

    <div className='sesh-times'>
      <a href='/'>
        <img src={tenMins} alt='10mins' id='image02' />
      </a>
    </div>

      <div className='sesh-times'>
      <a href='/'>
        <img src={fifteenMins} alt='15mins' id='image03' />
      </a>
    </div>
  </div>
);

export default Menu;
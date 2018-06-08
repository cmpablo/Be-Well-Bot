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
    <div className='page-nav-btns'>
        <ul>
          <li><a href='/'><span className="fas fa-arrow-circle-left"></span> Go Back</a></li>
        </ul>
    </div>
  </div>
);

export default Menu;
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
    <p>Before choosing a session, find a quiet space away from distraction with room to stretch.</p>
    <h6>Choose a time:</h6>
    <div className='row sesh-times'>
      <div className='col-'>
        <a href='/fiveyoga' id='five-min'>
          {/* <h2>5</h2>
          <h4>min</h4> */}
          <img src={fiveMins} alt='5mins' />
        </a>
      </div> 
      
      <div className='col-'>
        <a href='/tenmed' id='ten-min'>
          {/* <h2>10</h2>
          <h4>min</h4> */}
          <img src={tenMins} alt='10mins' />
        </a>
      </div>
      
      <div className='col-'>
        <a href='/fifteenyoga' id='fifteen-min'>
          {/* <h2>15</h2>
          <h4>min</h4> */}
          <img src={fifteenMins} alt='15mins' />
        </a>
      </div>
    </div>
  </div>
);

export default requireAuth(Menu);
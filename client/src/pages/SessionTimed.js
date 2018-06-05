import React from 'react';
import '../assets/css/style.css';

const TimedSession = () => (
  <div className='container'>
    <div className='sesh-timer'>
      <h1>
        10
      </h1>
      <p>minutes remaining</p>
      <button className='timer-btn' id='timerBtn'><span class="fas fa-clock"></span> Begin</button>
      <hr />
    </div>
    
    <div className='exercise-desc'>
    <h3>Breathe deeply.</h3>
    <p>
      Focus all of your attention on your breathing. 
      Concentrate on feeling and listening as you inhale and exhale through your nostrils. Breathe deeply and slowly. When your attention wanders, gently return your focus to your breathing.
      </p>
    </div>
  </div>
);

export default TimedSession;
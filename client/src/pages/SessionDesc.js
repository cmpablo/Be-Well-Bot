import React from 'react';
import '../assets/css/style.css';

const SessionDesc = () => (
  <div className='container'>

    <h4>
      10 Minutes
    </h4>
    <hr />
    <p>
    Even 10 minutes of meditation corned beef short loin mollit porchetta, brisket aute ea labore. Dolore cillum esse salami pariatur ham, sirloin elit tongue cupidatat sed lorem turkey jowl.
    </p>
    <p>
    Magna sausage minim cupidatat. Short ribs spare ribs picanha aliquip ribeye. Minim kevin lorem fugiat. Anim nisi kielbasa culpa strip steak short ribs ut officia voluptate beef andouille excepteur laborum capicola.
    </p>
    <br />
    
    <div className='page-nav-btns'>
        <ul>
          <li><a href='/'><span className="fas fa-arrow-circle-left"></span> Go Back</a></li>
          <li><a href='/'>Begin Exercise <span className="fas fa-arrow-circle-right"></span></a></li>
        </ul>
    </div>
  </div>
);

export default SessionDesc;
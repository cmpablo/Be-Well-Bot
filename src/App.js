import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
//import Welcome from './pages/Welcome';
import Signup from './pages/Signup';

const App = () => (
  <Router>
    <div>
      <Navbar />
       <Wrapper>
         {/* <Welcome /> */}
          {/* <Signup /> */}

        {/* <Route exact path="/works" component={Works} />
        <Route exact path="/cv" component={Resume} />
        <Route exact path="/contact" component={Contact} /> */}
      </Wrapper>
      {/*<Footer /> */}
    </div>
  </Router>
)

export default App;

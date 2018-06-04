import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
//import Signup from './pages/Signup';
//import Login from './pages/Login';
//import Dashboard from './pages/Dashboard';
//import Menu from './pages/SessionMenu';
import SessionDesc from './pages/SessionDesc';


const App = () => (
  <Router>
    <div >
      <Navbar />
      <SubNav />
       <Wrapper>
          {/* <Signup /> */}
          {/* <Login /> */}
          {/* <Dashboard /> */}
          {/* <Menu /> */}
          <SessionDesc />

        {/* <Route exact path="/works" component={Works} />
        <Route exact path="/cv" component={Resume} />
        <Route exact path="/contact" component={Contact} /> */}
      </Wrapper>
    </div>
  </Router>
)

export default App;

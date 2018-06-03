import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
//import Welcome from './pages/Welcome';
//import Signup from './pages/Signup';
//import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


const App = () => (
  <Router>
    <div >
      <Navbar />
      <SubNav />
       <Wrapper>
         {/* <Welcome /> */}
          {/* <Signup /> */}
          {/* <Login /> */}
          <Dashboard />

        {/* <Route exact path="/works" component={Works} />
        <Route exact path="/cv" component={Resume} />
        <Route exact path="/contact" component={Contact} /> */}
      </Wrapper>
    </div>
  </Router>
)

export default App;

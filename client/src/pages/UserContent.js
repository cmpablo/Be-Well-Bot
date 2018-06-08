import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './../assets/css/style.css';
import requireAuth from './../components/requireAuth';
import Header from './../components/Header';
import Navbar from './../components/Navbar';
import Dashboard from './Dashboard';
import Menu from './../components/Menu';

const UserContent = props => (
  <Router>
    <div className='user-content'>
      <Header />
      <Navbar />
      <Switch>
        <Route path='/dashboard' component={ Dashboard } />
        <Route path='/menu' component={ Menu } />
      </Switch>
    </div>
  </Router>
);

export default requireAuth(UserContent);
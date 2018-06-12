import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Menu from './components/Menu';
import Logout from './pages/Logout';

import FiveMinMed from './components/Timers/FiveMinMed';
import FiveMinYoga from './components/Timers/FiveMinYoga';
import TenMinMed from './components/Timers/TenMinMed';
import TenMinYoga from './components/Timers/TenMinYoga';
import FifteenMinYoga from './components/Timers/FifteenMinYoga';


const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') } 
  },
  applyMiddleware(reduxThunk)
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Navbar />
        <Wrapper>
          <Switch>
            <Route path='/' exact component={ Welcome } />
            <Route path='/signup' component={ Signup } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route path='/menu' component={ Menu } />
            <Route path='/logout' component={ Logout } />
            <Route path='/signin' component={ Signin } />
            <Route path='/fivemed' component={ FiveMinMed } />
            <Route path='/fiveyoga' component={ FiveMinYoga } />
            <Route path='/tenmed' component={ TenMinMed } />
            <Route path='/tenyoga' component={ TenMinYoga } />
            <Route path='/fifteenyoga' component={ FifteenMinYoga } />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  </Provider>
);

export default App;

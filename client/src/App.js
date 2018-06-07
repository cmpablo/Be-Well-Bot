import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Wrapper from './components/Wrapper';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import reducers from './reducers';
// import Login from './pages/Login';

const App = () => (
  <Provider store={createStore(reducers, {})}>
    <Router>
      <div >
        <Wrapper>
          <Switch>
            <Route path='/' exact component={ Welcome } />
            <Route path='/signup' component={ Signup } />
            {/* <Route path='/login' exact component={ Login } /> */}
          </Switch>
        </Wrapper>
      </div>
    </Router>
  </Provider>
);

export default App;

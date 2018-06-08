import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Wrapper from './components/Wrapper';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import UserContent from './pages/UserContent';
// import Logout from './pages/Logout';

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
      <div >
        <Wrapper>
          <Switch>
            <Route path='/' exact component={ Welcome } />
            <IndexRoute component={ Welcome } />
            <Route path='/signup' component={ Signup } />
            <Route path='/dashboard' component={ UserContent } />
            {/* <Route path='/logout' component={ Logout } /> */}
            <Route path='/signin' component={ Signin } />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  </Provider>
);

export default App;

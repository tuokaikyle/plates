import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';

const Routing = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/'>Go to home page</Link>
        <br />
        <Link to='/profile'>Profile page</Link>
        <hr />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;

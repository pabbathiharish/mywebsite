import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/homePage';
import AppAds from '../src/assets/images/APP-ADS.txt';
import { Route, Switch, Router } from 'react-router-dom';

function App() {
  return (
<Router history={history}>
<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/APP-ADS.TXT' component={AppAds} />
</Switch>
</Router>
  );
}

export default App;

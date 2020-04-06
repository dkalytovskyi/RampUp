import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './components/User';
import Home from './components/Home';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const items = [
    {
      text: 'Home',
      link: '/home',
      id: 1
    }, {
      text: 'User',
      link: '/user',
      id: 2
    }
  ]

  return (
    <Router>
      <Navbar items={items} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/user'>
          <User 
            firstName='Sam'
            lastName='Smith'
            email='sam@smith.com'
            password='12345'
            newsletter={false}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

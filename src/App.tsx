import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography } from 'antd';

import User from './components/User';

import './App.css';

function App() {
  const { Title } = Typography;

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Title>Home Page</Title>
        </Route>
        <Route path='/home'>
          <Title>Home Page</Title>
        </Route>
        <Route path='/user' component={User} />
      </Switch>
    </Router>
  );
}

export default App;

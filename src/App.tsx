import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography } from 'antd'; 

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
        <Route path='/user'>
          <Title>User Page</Title>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

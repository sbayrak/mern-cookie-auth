import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path='/'></Route>
        <Route exact path='/login' component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;

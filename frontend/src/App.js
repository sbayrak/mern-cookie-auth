import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/userActions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo: userInfoDetails } = userDetails;

  useEffect(() => {
    if (!userInfo || !userInfoDetails) {
      dispatch(loadUser());
    }
  }, []);

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

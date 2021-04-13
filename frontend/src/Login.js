import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions/userActions';
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  if (userInfo) {
    history.push('/');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <>
      <Container maxWidth='lg'>
        <form onSubmit={submitHandler}>
          <Grid item>
            <Grid item>
              <Typography>E-mail</Typography>
              <TextField
                variant='outlined'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <Typography>Password</Typography>
              <TextField
                variant='outlined'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <Button type='submit'>Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Login;

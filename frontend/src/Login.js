import React from 'react';
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Login!');
  };
  return (
    <>
      <Container maxWidth='lg'>
        <form onSubmit={submitHandler}>
          <Grid item>
            <Grid item>
              <Typography>E-mail</Typography>
              <TextField variant='outlined'></TextField>
            </Grid>
            <Grid item>
              <Typography>Password</Typography>
              <TextField variant='outlined'></TextField>
            </Grid>
            <Grid item>
              <Button type='submit'>Submit</Button>
            </Grid>
          </Grid>{' '}
        </form>
      </Container>
    </>
  );
};

export default Login;

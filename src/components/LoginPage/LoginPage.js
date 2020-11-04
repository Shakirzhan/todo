import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import * as userActions from './actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoaderComponent } from '../LoaderComponent';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function handleSubmit(e, props) {
  e.preventDefault();

  const { login, password, dispatch } = props;
  if (login && password) {
      dispatch(userActions.login(login, password));
  }
}

function SignInSide(props) {
  const classes = useStyles();

  const { login, password, loading, dispatch, alert } = props;

  const actions = bindActionCreators(userActions, dispatch);
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e, props)}>
            {alert && <Alert severity="error">{alert.message}</Alert>}
            <LoaderComponent loading={loading}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Login"
                name="login"
                value={login}
                onChange={(e) => actions.changeLogin(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => actions.changePassword(e.target.value)}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading}
              >
                Sign In
              </Button>
            </LoaderComponent>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          
        </div>
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    login: state.authentication.login,
    password: state.authentication.password,
    loading: state.authentication.loading,
    alert: state.alert && state.alert.message && state.alert.message.response && state.alert.message.response.data[0]
  };
}

const connectedLoginPage = connect(mapStateToProps)(SignInSide);

export { connectedLoginPage as LoginPage }; 
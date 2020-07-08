import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from '../PrivateRoute';
import { LoggedRoute } from '../LoggedRoute';
import { history } from '../../helpers';

import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';

class App extends React.Component {
    render() {
        return (
          <Router history={history}>
              <div>
                  <PrivateRoute exact path="/" component={() => <HomePage />} />
                  <LoggedRoute exact path="/login" component={() => <LoginPage />} />
              </div>
          </Router>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
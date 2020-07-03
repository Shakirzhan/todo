import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from '../PrivateRoute';
import { history } from '../../helpers';

class App extends React.Component {
    render() {
        return (
          <Router history={history}>
              <div>
                  <PrivateRoute exact path="/" component={() => <div>Home</div>} />
                  <Route path="/login" component={() => <div>Login</div>} />
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
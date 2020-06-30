import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteNode } from 'react-router5';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import '../style/main.css';

import LoginPage from './LoginPage';

class App extends Component {

    render() {
        const isAuthenticated = false;

        return (
            <Router>
              <Switch>
                <Route path="/auth">
                  <LoginPage />
                </Route>
                <Route exact path="/">
                  <p>Load...</p>
                </Route>
              </Switch>
              {/* {!isAuthenticated && <Redirect to={{ pathname: "/auth" }} />} */}
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(
    (props) => (
        <RouteNode nodeName="">
            {({ route }) => <App route={route} {...props}/>}
        </RouteNode>
    )
);

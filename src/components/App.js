import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteNode } from 'react-router5';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import '../style/main.css';

import styles from '../style/FriendListApp.css';

class App extends Component {

    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/">
                  <div className={styles.friendListApp}>
                    <h1>The FriendList</h1>
                  </div>
                </Route>
              </Switch>
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

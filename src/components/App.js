import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { RouteNode } from 'react-router5';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import '../style/main.css';

import styles from '../style/style.css';

class App extends Component {

    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/">
                  <div className={styles.friendListApp}>
                    <h1>The FriendList</h1>
                    <input
                      type="text"
                      autoFocus="true"
                      className={classnames('form-control', styles.addFriendInput)}
                      placeholder="Type the name of a friend"
                    />
                    <ul className={styles.friendList}>
                      <li className={styles.friendListItem}>
                        <div className={styles.friendInfos}>
                          <div><span>Name</span></div>
                          <div><small>xx friends in common</small></div>
                        </div>
                        <div className={styles.friendActions}>
                          <button className={`btn btn-default ${styles.btnAction}`}>
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </li>
                    </ul>
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

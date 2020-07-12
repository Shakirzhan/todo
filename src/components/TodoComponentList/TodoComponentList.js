import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";

import { connect } from 'react-redux';

import { TodoComponentItem } from './TodoComponentItem';

class TodoComponentList extends Component {
  render() {
    return (
      <Paper style={{ marginBottom: 10 }}>
        <List>
          <TodoComponentItem />
        </List>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedTodoComponent = connect(mapStateToProps)(TodoComponentList);
export { connectedTodoComponent as TodoComponentList }; 
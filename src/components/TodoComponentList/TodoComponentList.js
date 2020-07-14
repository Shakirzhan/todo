import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";

import { connect } from 'react-redux';

import { TodoComponentItem } from './TodoComponentItem';

class TodoComponentList extends Component {
  render() {
    const { friendList: { friendsById } } = this.props;
    return (
      <Paper style={{ marginBottom: 10 }}>
        <List>
          {!!friendsById.length && friendsById.map(friend => <TodoComponentItem id={friend.id} key={friend.id} name={friend.name} friendsById={friendsById} />)}
        </List>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList
  };
}

const connectedTodoComponent = connect(mapStateToProps)(TodoComponentList);
export { connectedTodoComponent as TodoComponentList }; 
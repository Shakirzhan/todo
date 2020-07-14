import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as FriendsActions from './actions';

class TodoComponentItem extends Component {
  onDeleteFriend = () => {
    const { dispatch, id } = this.props;
    const action = bindActionCreators(FriendsActions, dispatch);
    action.deleteFriend(id);
  }

  onChangeCheckbox = () => {
    const { dispatch, id, friendList: { friends } } = this.props;
    const action = bindActionCreators(FriendsActions, dispatch);
    if(!friends.find(friend => friend === id)) {
      action.addFriendCheckbox(id);
    } else {
      action.deleteFriendCheckbox(id);
    }
  }

  render() {
    const { name, id, friendList: { friends } } = this.props;
    
    return (
      <ListItem>
        <Checkbox
          disableRipple
          checked={ !!friends.find(friend => friend === id) }
          onChange={this.onChangeCheckbox}
        />
        <ListItemText primary={name} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={this.onDeleteFriend}>
              <DeleteOutlined />
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList
  };
}

const connectedTodoComponentItem = connect(mapStateToProps)(TodoComponentItem);
export { connectedTodoComponentItem as TodoComponentItem }; 
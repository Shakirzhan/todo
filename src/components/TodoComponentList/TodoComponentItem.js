import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as ItemsActions from './actions';

class TodoComponentItem extends Component {
  onDeleteItem = () => {
    const { dispatch, id } = this.props;
    const action = bindActionCreators(ItemsActions, dispatch);
    action.deleteItem(id);
  }

  onChangeCheckbox = () => {
    const { dispatch, id, checkList: { checkList } } = this.props;
    const action = bindActionCreators(ItemsActions, dispatch);
    if(!checkList.find(item => item === id)) {
      action.addItemCheckbox(id);
    } else {
      action.deleteItemCheckbox(id);
    }
  }

  render() {
    const { name, id, checkList: { checkList } } = this.props;
    
    return (
      <ListItem>
        <Checkbox
          disableRipple
          checked={ !!checkList.find(item => item === id) }
          onChange={this.onChangeCheckbox}
        />
        <ListItemText primary={name} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={this.onDeleteItem}>
              <DeleteOutlined />
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

function mapStateToProps(state) {
  return {
    checkList: state.checkList
  };
}

const connectedTodoComponentItem = connect(mapStateToProps)(TodoComponentItem);
export { connectedTodoComponentItem as TodoComponentItem }; 
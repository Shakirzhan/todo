import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

import { connect } from 'react-redux';

class TodoComponentItem extends Component {
  render() {
    return (
      <ListItem>
        <Checkbox
          disableRipple
        />
        <ListItemText primary="txt" />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo">
              <DeleteOutlined />
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedTodoComponentItem = connect(mapStateToProps)(TodoComponentItem);
export { connectedTodoComponentItem as TodoComponentItem }; 
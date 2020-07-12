import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';

import { TodoComponentList } from '../TodoComponentList';

class TodoComponentInput extends Component {
  render () {
    return (
      <form id="myForm">
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="What needs to be done?"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </div>

        <TodoComponentList />
      
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedTodoComponentInput = connect(mapStateToProps)(TodoComponentInput);
export { connectedTodoComponentInput as TodoComponentInput }; 
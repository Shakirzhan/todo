import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { TodoComponentList } from './TodoComponentList';
import * as FriendsActions from './actions';

class TodoComponentInput extends Component {
  state = {
    name: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const action = bindActionCreators(FriendsActions, dispatch);
    action.addFriend(this.state.name);
    this.setState({ name: '' });
  }

  onDelete = () => {
    const { dispatch } = this.props;
    const action = bindActionCreators(FriendsActions, dispatch);
    action.deleteFriendAll([1,3]);
  }

  render () {
    const { name } = this.state;

    return (
      <form id="myForm" onSubmit={this.onSubmit}>
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
            onChange={e => this.setState({name: e.target.value})}
            value={name}
          />
        </div>

        <TodoComponentList />
      
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{marginBottom: 10}}
        >
          Add todo
        </Button>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.onDelete}
        >
          Delete
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
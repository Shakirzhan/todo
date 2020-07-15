import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";

import { connect } from 'react-redux';

import { TodoComponentItem } from './TodoComponentItem';

import * as userActions from './actions';

class TodoComponentList extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(userActions.fetchMainList());
  }

  render() {
    const { checkList: { mainList } } = this.props;
    return (
      <Paper style={{ marginBottom: 10 }}>
        <List>
          {!!mainList.length && mainList.map(item => <TodoComponentItem id={item.id} key={item.id} name={item.name} mainList={mainList} />)}
        </List>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    checkList: state.checkList
  };
}

const connectedTodoComponent = connect(mapStateToProps)(TodoComponentList);
export { connectedTodoComponent as TodoComponentList }; 
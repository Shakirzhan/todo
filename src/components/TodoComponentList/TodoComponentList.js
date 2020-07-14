import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";

import { connect } from 'react-redux';

import { TodoComponentItem } from './TodoComponentItem';

class TodoComponentList extends Component {
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
import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';

import { TodoComponentInput } from '../TodoComponentInput';

class HomePage extends Component {
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <Paper>
            <div 
            style={{
              display: 'flex',
              
            }}
            >
              <div style={{width: '100%'}}>
                <h1 style={{ textAlign: 'center', color: 'rgb(97, 97, 97)'}}>
                  Todo List 
                </h1>
              </div>
            </div>
         
              <div>
                <TodoComponentInput />
              </div>
        
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage }; 
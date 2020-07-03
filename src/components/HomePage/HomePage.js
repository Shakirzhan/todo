import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';

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
              <div style={{marginLeft: '44%'}}>
                <h1 style={{ textAlign: 'center', color: 'rgb(97, 97, 97)'}}>
                  Todo List 
                </h1>
              </div>
            </div>
         
              <div>
                <form id="myForm">
                  {/* <Paper style={{width: '90%', leftMargin: '15px'}} zDepth={1}> */}
                    <div style={{marginLeft: '10px'}}>
                      <TextField 
                        hintText="What needs to be done?"
                        className="AddText" 
                        fullWidth
                      />
                    </div>
                  {/* </Paper> */}
                  <br/>
                  <Button 
                    type="submit" 
                    label='Add todo' 
                    />
                </form>
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
import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

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
              <div style={{width: '100%'}}>
                <h1 style={{ textAlign: 'center', color: 'rgb(97, 97, 97)'}}>
                  Todo List 
                </h1>
              </div>
            </div>
         
              <div>
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
                
                    <Paper style={{ marginBottom: 10 }}>
                      <List>
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
                      </List>
                    </Paper>
          


                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Add todo
                    </Button>
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
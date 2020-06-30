import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {

    render() {
        return (
            <div className="jss21">
                <div className="box">
                    <div className="jss22">
                        <div className="jss23">
                            <h2 className="custom_title">Авторизация</h2>
                        </div>
                        <div className="field_box">
                            <TextField
                                id="outlined-helperText"
                                label="Login name"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="field_box">
                            <TextField
                                id="outlined-helperText"
                                label="Password"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <Button style={{background: '#3f51b5', color: '#fff'}} className="custom_button" fullWidth variant="contained">Войти</Button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(LoginPage);

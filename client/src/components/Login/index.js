import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import useStyles from './styles';
import { AuthContext } from '../../contexts/AuthContext';

let Login = () => {
    let classes = useStyles();
    let { token, onLoginSuccess } = useContext(AuthContext);
    let loginStatePrimary = {
        username: '',
        password: '',
    };
    let [values, setValues] = useState(loginStatePrimary);

    if (token) {
        return <Navigate to="/" />;
    }

    let onInputChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    let onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/api/auth/token/login/', values)
            .then((response) => {
                setValues(loginStatePrimary);
                if (response.data && response.data.auth_token) {
                    onLoginSuccess(response.data.auth_token);
                }
            })
            .catch((err) => {
                setValues(loginStatePrimary);
                console.error(err);
            });
    };

    return (
        <div className={classes.container}>
            <form onSubmit={onSubmit}>
                <Paper elevation={3} className={classes.loginBox}>
                    <Grid container spacing={2} style={{ width: '100%' }}>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input}
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="text"
                                variant="outlined"
                                value={values.username}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={values.password}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={8} />
                        <Grid item xs={8} />
                        <Grid item xs={4}>
                            <Button className={classes.input} type="submit" color="primary" variant="contained" fullWidth>
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
};

export default Login;

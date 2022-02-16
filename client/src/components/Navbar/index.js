import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import useStyles from './styles';
import { AuthContext } from '../../contexts/AuthContext';

let Navbar = () => {
    let classes = useStyles();
    let { token, onLogoutSuccess } = useContext(AuthContext);
    let [user, setUser] = useState(null);
    let [anchor, setAnchor] = useState(null);

    useEffect(() => {
        onMenuClose();
        if (token) {
            axios
                .get('/api/auth/users/me/', {
                    headers: { Authorization: `Token ${token}` },
                })
                .then((response) => {
                    setUser(response.data);
                })
                .catch((err) => {
                    onLogoutSuccess();
                });
        } else {
            setUser(null);
        }
    }, [token]);

    let onMenuClick = (event) => {
        setAnchor(event.currentTarget);
    };

    let onMenuClose = () => {
        setAnchor(null);
    };

    let onLogoutClick = () => {
        axios
            .post('/api/auth/token/logout/', null, {
                headers: { Authorization: `Token ${token}` },
            })
            .then((response) => {
                onLogoutSuccess();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar variant="dense">
                <Link to="/" className={classes.title}>
                    Survey
                </Link>
                {user ? (
                    <>
                        <IconButton onClick={onMenuClick}>
                            <AccountCircle className={classes.icon} fontSize="large" />
                        </IconButton>
                        <Menu
                            anchorEl={anchor}
                            onClose={onMenuClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchor)}
                        >
                            <MenuItem onClick={onLogoutClick}>Log out</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <>
                        <Typography variant="subtitle1">
                            <Link className={classes.link} to="/login">
                                Log in
                            </Link>
                        </Typography>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

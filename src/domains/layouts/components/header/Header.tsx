import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

export const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start' color='inherit' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Link to='/' className={classes.link}>
                    <Typography variant='h6' color='inherit' noWrap>
                        Translate API Client
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles(() => ({
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
}));

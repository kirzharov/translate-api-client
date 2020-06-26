import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

export const Header: React.FC = () => (
    <AppBar position='static'>
        <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
                Translate API Client
            </Typography>
        </Toolbar>
    </AppBar>
);

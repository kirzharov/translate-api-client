import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, makeStyles } from '@material-ui/core';

import { Default as LayoutContainer } from '../../layouts/';

export const NotFound: React.FC = () => {
    const classes = useStyles();

    return (
        <LayoutContainer>
            <Typography variant='h3' component='h1'>
                404 page
            </Typography>
            <Typography paragraph color='inherit' className={classes.paragraph}>
                Please check your url or go to <Link to='/'>Main page</Link>.
            </Typography>
        </LayoutContainer>
    );
};

const useStyles = makeStyles(() => ({
    paragraph: {
        margin: '16px 0',
    },
}));

import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { Default as LayoutContainer } from '../../layouts';
import { Step1 } from './components';

export const MainPageContainer: React.FC = () => {
    const classes = useStyles();

    const [token, setToken] = useState<string>('');

    const handleChangeToken = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    return (
        <LayoutContainer>
            <Grid container spacing={4} className={classes.root}>
                <Step1 token={token} handleChangeToken={handleChangeToken} />
            </Grid>
        </LayoutContainer>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        flexDirection: 'column',
    },
}));

import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { Header } from '../components/header/';

import { LayoutPropsT } from '../types';

const LayoutContainer: React.FC = ({ children }: LayoutPropsT) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <div>
                    <Header />
                    <main>
                        <div className={classes.contentWrapper}>{children}</div>
                    </main>
                </div>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles(() => ({
    contentWrapper: {
        margin: '40px',
    },
}));

export default LayoutContainer;

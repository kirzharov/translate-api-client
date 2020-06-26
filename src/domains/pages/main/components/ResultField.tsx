import React from 'react';
import { Grid, TextField, IconButton, makeStyles } from '@material-ui/core';
import CopyToClipboard from 'react-copy-to-clipboard';

import FileCopyIcon from '@material-ui/icons/FileCopy';

import { ResultFieldPropsT } from './types';

export const ResultField: React.FC<ResultFieldPropsT> = ({ data }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={5}>
            <div className={classes.resultWrapper}>
                <TextField id='standard-textarea' value={data} multiline fullWidth />
                <CopyToClipboard text={data}>
                    <IconButton edge='start' color='primary' aria-label='menu' className={classes.icon}>
                        <FileCopyIcon />
                    </IconButton>
                </CopyToClipboard>
            </div>
        </Grid>
    );
};

const useStyles = makeStyles(theme => ({
    resultWrapper: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            margin: '72px 0 16px',
        },
    },
    icon: {
        margin: '0 0px 0 16px',
    },
}));

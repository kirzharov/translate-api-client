import React from 'react';
import { Grid, Typography, FormControl, InputLabel, Input, makeStyles } from '@material-ui/core';

import { Step1PropsT } from './types';

export const Step1: React.FC<Step1PropsT> = ({ token, handleChangeToken, requestError }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={5}>
            <Typography variant='h4' component='h1'>
                Step 1:
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='component-simple' error={requestError.length > 0}>
                    Token
                </InputLabel>
                <Input
                    id='component-simple'
                    placeholder='example: 9a7ad4890d38499b9e941ba41dbd6986'
                    value={token}
                    onChange={handleChangeToken}
                    fullWidth
                />
            </FormControl>
        </Grid>
    );
};

const useStyles = makeStyles(() => ({
    formControl: {
        margin: '16px 0',
        minWidth: '416px',
    },
}));

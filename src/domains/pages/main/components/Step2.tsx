import React from 'react';
import { Grid, Typography, FormControl, TextField, Select, MenuItem, Button, makeStyles } from '@material-ui/core';

import { Spinner } from '../../../components/spinner';

import { Step2PropsT } from './types';

export const Step2: React.FC<Step2PropsT> = ({
    token,
    translateText,
    locale,
    provider,
    locales,
    handleChangeTranslateText,
    handleChangeLocale,
    setTranslateTask,
    requestError,
    isLoading,
}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={5}>
            <Typography variant='h4' component='h2'>
                Step 2:
            </Typography>
            {isLoading ? (
                <Spinner />
            ) : (
                <FormControl fullWidth disabled={token.length === 0} className={classes.formControl}>
                    <TextField
                        id='component-simple'
                        label='Text for translation'
                        value={translateText}
                        onChange={handleChangeTranslateText}
                        multiline
                        fullWidth
                        disabled={token.length === 0}
                        helperText={requestError}
                        error={requestError.length > 0}
                    />
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={locale}
                        onChange={handleChangeLocale}
                        className={classes.select}
                    >
                        {locales.map(locale => (
                            <MenuItem value={locale} key={locale}>
                                {locale}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        disabled={translateText.length === 0 || locale.length === 0}
                        onClick={() => setTranslateTask({ token, translateText, locale, provider })}
                    >
                        Translate
                    </Button>
                </FormControl>
            )}
        </Grid>
    );
};

const useStyles = makeStyles(() => ({
    formControl: {
        margin: '16px 0',
    },
    select: {
        margin: '32px 0',
    },
    button: {
        minHeight: '48px',
    },
}));

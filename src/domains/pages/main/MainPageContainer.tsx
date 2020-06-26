import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { Default as LayoutContainer } from '../../layouts';
import { Step1, Step2 } from './components';

import { provider, locales } from '../../../configs/providers/microsoftTranslatorTextApiV3';

import { TranslateTaskT } from './types';

export const MainPageContainer: React.FC = () => {
    const classes = useStyles();

    const [token, setToken] = useState<string>('');
    const [translateText, setTranslateText] = useState<string>('');
    const [locale, setLocale] = useState<string>('');
    const [translateTask, setTranslateTask] = useState<TranslateTaskT>({});

    const handleChangeToken = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    const handleChangeTranslateText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTranslateText(event.target.value);
    };

    const handleChangeLocale = (event: any) => {
        setLocale(event.target.value);
    };

    return (
        <LayoutContainer>
            <Grid container spacing={4} className={classes.root}>
                <Step1 token={token} handleChangeToken={handleChangeToken} />
            </Grid>
            <Grid container spacing={4}>
                <Step2
                    token={token}
                    translateText={translateText}
                    locale={locale}
                    provider={provider}
                    locales={locales}
                    handleChangeTranslateText={handleChangeTranslateText}
                    handleChangeLocale={handleChangeLocale}
                    setTranslateTask={setTranslateTask}
                />
            </Grid>
        </LayoutContainer>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        flexDirection: 'column',
    },
}));

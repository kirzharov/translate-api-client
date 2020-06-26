import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { Default as LayoutContainer } from '../../layouts';
import { Step1, Step2, ResultField } from './components';

import { translate } from '../../../helpers/apiHandlers';

import { provider, locales } from '../../../configs/providers/microsoftTranslatorTextApiV3';

export const MainPageContainer: React.FC = () => {
    const classes = useStyles();

    const [token, setToken] = useState<string>('');
    const [translateText, setTranslateText] = useState<string>('');
    const [locale, setLocale] = useState<string>('');
    const [translateTask, setTranslateTask] = useState<TranslateTaskT>({});
    const [requestError, setRequestError] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChangeToken = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    const handleChangeTranslateText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTranslateText(event.target.value);
    };

    const handleChangeLocale = (event: any) => {
        setLocale(event.target.value);
    };

    useEffect(() => {
        async function getTtranslation() {
            let res = await translate(translateTask);

            if (res.results && res.results.length > 0) {
                setData(res.results[0]);
            } else {
                setRequestError('Something wrong, please, check your token');
            }

            setIsLoading(false);
        }

        if (Object.entries(translateTask).length !== 0) {
            setIsLoading(true);
            setData('');
            setRequestError('');
            getTtranslation();
        }
    }, [translateTask]);

    return (
        <LayoutContainer>
            <Grid container spacing={4} className={classes.root}>
                <Step1 token={token} handleChangeToken={handleChangeToken} requestError={requestError} />
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
                    requestError={requestError}
                    isLoading={isLoading}
                />
                {data && <ResultField data={data} />}
            </Grid>
        </LayoutContainer>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        flexDirection: 'column',
    },
}));

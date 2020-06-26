import React from 'react';
import classnames from 'classnames';
import { CircularProgress, makeStyles } from '@material-ui/core';

import { SpinnerPropsT } from './types';

export const Spinner: React.FC<SpinnerPropsT> = ({ size }) => {
    const classes = useStyles();
    return (
        <div
            className={classnames(classes.root, {
                [classes.large]: size === 'large',
            })}
        >
            <CircularProgress size={75} thickness={2} />
        </div>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: '100%',
        minHeight: 400,
    },
    large: {
        height: '80vh',
    },
}));

import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: '0px',
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    },
    
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '160px',
        width: '170px',
        position: 'relative',
        margin: '0px',
        padding: '0px',
    },

    circle: {
        border: '5px transparent solid',
        position: 'absolute',
        width: '100px',
        height: '100px',
        borderRadius: '69%',
    },

    cyan: {
        top: "0px",
        borderTop: '5px cyan solid',
        animation: '$cyan 1.5s infinite',

        "&::after": {
            position: 'absolute',
            content: "''",
            width: '10px',
            height: '10px',
            background: 'cyan',
            borderRadius: '69%',
            right: '5px',
            top: '10px',
            boxShadow: '0px 0px 20px cyan',
        },

        "&::before": {
            content: "''",
            width: '5px',
            height: '5px',
            position: 'absolute',
            background: 'cyan',
            top: '10px',
            left: '11px',
            borderRadius: '69%',
        }
    },

    magenta: {
        left: '0px',
        bottom: '0px',
        borderTop: '5px magenta solid',
        animation:'$magenta 1.5s infinite',
        
        '&::after': {
            position: "absolute",
            content: "''",
            width: '10px',
            height: '10px',
            background: 'magenta',
            borderRadius: '69%',
            right: '5px',
            top: '10px',
            boxShadow: '0px 0px 20px magenta',
        },

        '&::before': {
            content: "''",
            width: '5px',
            height: '5px',
            position: 'absolute',
            background: 'magenta',
            top: '10px',
            left: '11px',
            borderRadius: '69%',
        }
    },

    yellow: {
        right: '0px',
        bottom: '0px',
        borderTop: '5px yellow solid',
        animation: '$yellow 1.5s infinite',

        '&::after': {
            position: 'absolute',
            content: "''",
            width: '10px',
            height: '10px',
            background: 'yellow',
            borderRadius: '69%',
            right: '5px',
            top: '10px',
            boxShadow: '0px 0px 20px yellow',
        },

        '&::before': {
            content: "''",
            width: '5px',
            height: '5px',
            position: 'absolute',
            background: 'yellow',
            top: '10px',
            left: '11px',
            borderRadius: '69%',
        }
    },

    "@keyframes cyan": {
        "0%": {
            transform: "rotate(0deg)",
        },
        "100%": {
            transform: "rotate(360deg)",
        }
    },

    '@keyframes magenta': {
        '0%': {
            transform: 'rotate(240deg)',
        },
        '100%': {
            transform: 'rotate(600deg)'
        }
    },

    '@keyframes yellow':  {
        '0%': {
            transform: 'rotate(120deg)',
        },
        '100%': {
            transform: 'rotate(480deg)'
        }
    },

    text: {
        fontFamily: 'roboto, sans-serif',
        color: 'white',
        position: 'absolute',
        top: '175px',
        fontSize: '1.5em',
        letterSpacing: '0.15em',
        fontWeight: 100,
        filter: 'drop-shadow(2px 2px 15px #ffffff70)'
    }
}));

function LoadingComponent(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.loading}>
                <div className={clsx(classes.circle, classes.cyan)}></div>
                <div className={clsx(classes.circle, classes.magenta)}></div>
                <div className={clsx(classes.circle, classes.yellow)}></div>
                <p className={classes.text}>Loading...</p>
            </div>
        </div>
    );
}

export default LoadingComponent;
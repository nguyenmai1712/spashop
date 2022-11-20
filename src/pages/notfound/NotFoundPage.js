import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    container: {
        background: 'white',    
    },

    content: {
        transform: 'translateY(-20%)',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& h1': {
            fontSize: 100,
            margin: 0,
        },
        '& p' : {
            margin: 0,
            fontSize: 16,
            lineHeight: '20px',
        },
    },
    backButton: {
        marginTop: 14,
    },
}));

function NotFoundPage(props) {
    const classes = useStyles();
    const history = useHistory();
    const handleNavigate = (link) => {
        history.push(link);
    }
    return (
       <div className={classes.container}>
        <div className={classes.content}>
            <h1>Oops!</h1>
            <h3> 404 - Page not found </h3>
            <p>The page you looking for might have been remove</p>
            <p>had its name change or temporarily unavailable</p>
            <Button
                variant="contained"
                color="secondary"
                className={classes.backButton}
                onClick={() => handleNavigate("/home")}
            > 
                Go to home
            </Button>
        </div>
       </div>
    );
}

export default NotFoundPage;
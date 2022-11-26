import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    container: {
        background: 'white',    
    },

    content: {
        width: '100%',
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        '& h1': {
            marginTop: 100,
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
            <h3> 404 - Không tìm thấy trang </h3>
            <Button
                variant="contained"
                color="secondary"
                className={classes.backButton}
                onClick={() => handleNavigate("/home")}
            > 
                Về trang chủ
            </Button>
        </div>
       </div>
    );
}

export default NotFoundPage;
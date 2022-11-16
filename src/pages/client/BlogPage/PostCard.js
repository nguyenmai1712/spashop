import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'white',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    padding: 20,
  },
  imageFrame: {
    width: '100%',
    overflow: 'hidden',
  },
  
  image: {
    width: 'inherit',
    objectFit: 'contain',
  },

  header: {
    margin: '20px 0px',
  },

  title: {
    fontSize: 18,
    letterSpacing: 1.5,
    fontFamily: 'Lato',
    fontWeight: 600,
  },
  
  infor: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
  },

  description: {
    marginBottom: 20,
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#686868',
  },

  button: {
    background: '#fb6f92',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      background: '#ffc2d1',
    },
  },

}));

function PostCard({ data }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <div className={classes.imageFrame}>
        <img alt='' src={data.image} className={classes.image}/>
      </div>
      <div className={classes.header}>
        <Typography className={classes.title}>{data.title}</Typography>
        <Typography className={classes.infor}>{`${data.author} - ${data.category} - ${data.date}`}</Typography>
      </div>
      <div className={classes.description}>{data.description.slice(0,333)+'...'}</div>
      <Button
        onClick={() => history.push({
          pathname: `/blog/${data.title}`,
          state: {
            data,
          },
        })}
        variant="contained"
        className={classes.button}
      >
        Read More
      </Button>
    </div>
  )
}

export default PostCard;
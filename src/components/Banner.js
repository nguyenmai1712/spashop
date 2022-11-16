import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import banner from 'assets/images/banner.png';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 20,
    padding: 10,
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  banner: {
    width: '100%',
    height: '100%',
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar variant='square' src={banner} className={classes.banner} />
    </div>
  )
}

export default Banner;
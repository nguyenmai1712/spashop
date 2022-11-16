import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import clsx from 'clsx';
import { useScrollWindow } from 'hooks/input.hooks';

const useStyles = makeStyles(() => ({
  container: {
    position: 'fixed',
    boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    background: 'white',
    borderRadius: 10,
    transform: 'translateX(300px)',
    transition: 'all ease-in-out .6s',
  },

  show: {
    transform: 'translateX(0px)',
  },

  icon: {
    fontSize: 32,
    color: '#f4a51c'
  },

}));

function ScrollTopButton() {
  const classes = useStyles();
  const { screenHeight } = useScrollWindow();

  const handleScrollTop = () => {
    console.log("scroll Top")
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className={clsx(classes.container, {
      [classes.show]: screenHeight>300,
    })}>
      <IconButton onClick={handleScrollTop}>
        <ExpandLessIcon className={classes.icon}/>
      </IconButton>
    </div>
  )
}

export default ScrollTopButton;
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
      color: '#fb6f92'
    },
  },
  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: '50%',
    overflow: 'hidden',
    border: 'solid 1px rgb(241, 241, 241)',
    '& img': {
      width: 'inherit',
      height: 'inherit',
      borderRadius: '50%',
      objectFit: 'cover',
      transition: 'all ease-in-out .5s',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },

  categoryName: {
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: 'bold',
    transition: 'all ease-in-out .5s',
  },

}))

function CategoryCard({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img alt='' src={data.image} />
      </div>
      <div style={{ width: '100%', marginTop: 10 }}>
        <Typography className={classes.categoryName}>{data.name}</Typography>
      </div>
    </div>
  )
}

export default CategoryCard;
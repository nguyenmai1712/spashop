import React from 'react';
import { makeStyles, Grid, Avatar, Typography } from '@material-ui/core';
import showcase1 from "assets/images/home_beauty_salon_shop_1.jpg";
import showcase2 from "assets/images/home_beauty_salon_shop_2.jpg";
import showcase3 from "assets/images/home_beauty_salon_shop_3.jpg";
import showcase4 from "assets/images/home_beauty_salon_shop_4.jpg";

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  image: {
    margin: 10,
    width: 70,
    height: 70,
    border: 'solid 0.5px #d9d5d5',
    borderRadius: 4,
  },
  title: {
    padding: 5,
    fontWeight: 600,
    fontFamily: 'Lato',
    letterSpacing: 2,
  },
}))

function ShowCase({ collapse }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {
        !collapse && <Typography className={classes.title}>Hàng Trưng bày</Typography>
      }
      <Grid container>
        <Grid container item xs={6} justifyContent="center" >
          <Avatar className={classes.image} src={showcase1} />
          <Avatar className={classes.image} src={showcase2} />
        </Grid>
        <Grid container item xs={6} justifyContent="center">
          <Avatar className={classes.image} src={showcase3} />
          <Avatar className={classes.image} src={showcase4} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ShowCase;
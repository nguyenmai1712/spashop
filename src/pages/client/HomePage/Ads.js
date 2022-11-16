import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import ads1 from 'assets/images/bannerAd1.jpg'
import ads2 from 'assets/images/bannerAd2.jpg'

const useStyles = makeStyles(() => ({
  container: {
  },
  bannerImage: {
    height: 270,
    objectFit: 'cover',
  }

}))
function Ads() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item sm={12} md={6} lg={6} className={classes.bannerImage}>
          <img alt='' src={ads1} width="100%" className={classes.bannerImage}/>
        </Grid>
        <Grid item sm={12} md={6} lg={6} className={classes.bannerImage} >
          <img alt='' src={ads2} width="100%" className={classes.bannerImage}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Ads
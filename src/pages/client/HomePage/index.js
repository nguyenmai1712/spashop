import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Ads from './Ads';

import BannerSlide from './BannerSlide';
import OneRowProduct from '../../../components/OneRowProduct';
import ShopByCategory from './ShopByCategory';
import TrendNow from './TrendNow';
import DiscoveryNow from './DiscoverNow';
import Brand from './Brand';

import { productsData } from '../../FakeData';

const useStyles = makeStyles(() => ({
  container: {
  },
  cardContainer: {
    marginBottom: 20,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  bannerOffer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    background: "#f4a51c",
  },

  offerText: {
    fontSize: 18,
    fontFamily: 'Lato',
    color: 'white',
    fontWeight: 600,
    letterSpacing: 2,
  },
  button: {
    textTransform: 'none',
    color: '#686868',
    background: 'white',
    fontFamily: 'Lato',
    '&:hover': {
      color: '#f4a51c',
      background: '#f3f3f3f3',
    }
  },
}))

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12} className={classes.cardContainer}>
          <BannerSlide />
        </Grid>
        <Grid item xs={12} className={classes.cardContainer}>
          <div className={classes.bannerOffer}>
            <Typography className={classes.offerText}>Big offers on new collection</Typography>
            <Button className={classes.button}> Know more </Button>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.cardContainer}>
          <TrendNow />
        </Grid>
        <Grid item xs={12} className={classes.cardContainer}>
          <ShopByCategory />
        </Grid>
        <Grid item xs={12} className={classes.cardContainer}>
          <OneRowProduct data={productsData} title="Hot Right Now" />
        </Grid>
        <Grid item xs={12} className={classes.cardContainer}>
          <Ads />
        </Grid>
        <Grid item xs={12} className={classes.cardContainer}>
          <DiscoveryNow />
        </Grid>
        <Grid item xs={12}>
          <Brand />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage;
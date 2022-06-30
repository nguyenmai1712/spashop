import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React from 'react';
import {
  Grid, IconButton, makeStyles, Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ProductCard from "components/ProductCard";

const useStyles = makeStyles((theme) => ({
  container: {
  },

  title: {
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
    letterSpacing: 2,
  },

  iconButton: {
    fontSize: 12,
  },

  navButton: {
    marginLeft: 5,
    background: 'white',
    '&:hover': {
      background: '#f3f3f3',
      color: '#df971a'
    },
  },

  cardContainer: {
    marginTop: 10,
    width: '100%',
    background: 'white',
  },

  mySwiper: {
    paddingBottom: 40,
  },

}));

function OneRowProduct({ data, title }) {
  const classes = useStyles();
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)


  return (
    <div className={classes.container}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item sm={12} md={3} lg={3}>
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
        <Grid container item sm={2} md={2} lg={2} justifyContent="flex-end">
          <Grid item>
            <IconButton ref={navigationPrevRef} className={classes.navButton}>
              <ArrowBackIosIcon className={classes.iconButton} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton ref={navigationNextRef} className={classes.navButton}>
              <ArrowForwardIosIcon className={classes.iconButton} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <div className={classes.cardContainer}>
          <Swiper
            navigation={{
              // Both prevEl & nextEl are null at render so this does not work
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current

                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            slidesPerView={4}
            modules={[Navigation]}
            className={classes.mySwiper}
          >
            {
              data.map(item => (
                <SwiperSlide key={item.id}>
                  <ProductCard data={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Grid>
    </div>
  )
}

export default OneRowProduct;
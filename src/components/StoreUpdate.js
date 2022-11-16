import 'swiper/css';
import 'swiper/css/navigation';

import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import postImg2 from 'assets/images/category4.jpg';
import postImg1 from 'assets/images/category3.jpg';
import MediaCard from './MediaCard';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    padding: 10,
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: 500,
    letterSpacing: 2,
  },
  iconButton: {
    fontSize: 12,
  },
  navButton: {
    '&:hover': {
      color: '#df971a'
    },
  },
  swiper: {
    width: '100%',
    height: '100%',
    '& .swiper-button-prev': {
      display: 'none',
    },
    '& .swiper-button-next': {
      display: 'none',
    },
  }
}));

function StoreUpdate() {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Typography className={classes.title}> Store Update </Typography>
        </Grid>
        <Grid container item xs={4}>
          <Grid item xs={6}>
            <IconButton ref={navigationPrevRef} className={classes.navButton}>
              <ArrowBackIosIcon className={classes.iconButton} />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton ref={navigationNextRef} className={classes.navButton}>
              <ArrowForwardIosIcon className={classes.iconButton} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Swiper
          navigation={{
            // Both prevEl & nextEl are null at render so this does not work
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          className={classes.swiper}
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
          // navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <MediaCard
              image={postImg1}
              title={'Relax on sunday'}
              content={'July 28, 2020'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <MediaCard
              image={postImg2}
              title={'A beautiful day'}
              content={'July 28, 2020'}
            />
          </SwiperSlide>
        </Swiper>
      </Grid>
    </div>
  )
}

export default StoreUpdate;
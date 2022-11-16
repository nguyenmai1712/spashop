import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ItemProductRecommend from 'components/ItemProductRecommend';
import { useWindowSize } from 'hooks/input.hooks';
import React from 'react';
import { Grid as Grids, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularData } from 'pages/FakeData';


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
    '& .MuiAvatar-img': {
      border: 'none',
    }
  },

  itemProducts: {
    width: '100%',
    padding: 5,
    margin: 10,
  },

  swiper: {
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      width: (props) => (props.width - 50),
    },
  },

}));


function DiscoveryNow() {
  const [width] = useWindowSize();
  const classes = useStyles({ width });
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <div className={classes.container}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={9} sm={10} md={3} lg={3}>
          <Typography className={classes.title}>Khám phá ngay</Typography>
        </Grid>
        <Grid container item xs={3} sm={2} md={2} lg={2} justifyContent="flex-end">
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
            slidesPerView={4}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                grid: {
                  fill: 'row',
                  rows: 2,
                }
              },

              768: {
                slidesPerView: 3,
                grid: {
                  fill: 'row',
                  rows: 2,
                }
              },

              1024: {
                slidesPerView: 3,
                grid: {
                  fill: 'row',
                  rows: 2,
                }
              },
              1200: {
                slidesPerView: 4,
                grid: {
                  fill: 'row',
                  rows: 2,
                }
              }
            }}
            grid={{
              fill: 'row',
              rows: 2,
            }}
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
            scrollbar={{ draggable: true }}
            modules={[Navigation, Grids]}
          >
            {
              popularData.map(item => (
                <SwiperSlide key={item.id}>
                  <div className={classes.itemProducts}>
                    <ItemProductRecommend item={item} myClass="discovery" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Grid>
    </div>
  )
}

export default DiscoveryNow;
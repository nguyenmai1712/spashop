import "swiper/css";

import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from 'components/CategoryCard';
import { useWindowSize } from 'hooks/input.hooks';
import { categoryImageData } from '../../FakeData';

const useStyles = makeStyles((theme) => ({
  container: {

  },

  swiper: {
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      width: (props) => (props.width -50),
    },
  },

  title: {
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
    letterSpacing: 2,
  },

  categoryCardContainer: {
    marginTop: 10,
    background: 'white',
    padding: 10,
  },
}));

function ShopByCategory() {
  const [width] = useWindowSize();
  const classes = useStyles({ width });
  return (
    <div className={classes.container}>
      <Grid container>
        <Typography className={classes.title}>
          Liệu trình hot
        </Typography>
      </Grid>
      <Grid container className={classes.categoryCardContainer}>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
              300: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },

              768: {
                slidesPerView: 4,
              },

              1024: {
                slidesPerView: 5,
              },
            }}
          className={classes.swiper}
        >
        {
          categoryImageData.map(item => (
            <SwiperSlide key={item.id}>
              <CategoryCard data={item}/>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </Grid>
    </div>
  )
}

export default ShopByCategory;
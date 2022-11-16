import 'swiper/css';
import 'swiper/css/pagination';

import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import slideImage1 from 'assets/images/slide1.jpg';
import slideImage2 from 'assets/images/slide2.jpg';
import slideImage3 from 'assets/images/slide3.jpg';
import { useWindowSize } from 'hooks/input.hooks';

const useStyles = makeStyles((theme) => ({
  slide: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  swiper: {
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      width: (props) => (props.width -20),
    },
    height: '100%',
    '& .swiper-pagination-bullet': {
      height: 12,
      width: 12,
    },
    '& .swiper-pagination-bullet-active': {
      background: 'black'
    },
  },
}))

function BannerSlide() {
  const [width] = useWindowSize();
  const classes = useStyles({ width });
  return (
    <>
      <Swiper
        className={classes.swiper}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        autoHeight={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Avatar variant="square" src={slideImage1} className={classes.slide} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar variant="square" src={slideImage2} className={classes.slide} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar variant="square" src={slideImage3} className={classes.slide} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default BannerSlide;
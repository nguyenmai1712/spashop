import React from 'react';

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from 'components/ProductCard';
import { Grid, Navigation } from 'swiper';
import { useWindowSize } from 'hooks/input.hooks';


import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  swiper: {
    paddingBottom: 30,
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      width: (props) => (props.width -50),
    },
  },
}));

function TwoRowProducts({ data, nextButtonRef, prevButtonRef, productIdCart }) {
  const [width] = useWindowSize();
  const classes = useStyles({width});
  return (
    <>
      <Swiper
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              370: {
                slidesPerView: 2,
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
                slidesPerView: 4,
                grid: {
                  fill: 'row',
                 rows: 2,
                }
              },
            }}
            grid={{
              fill: 'row',
              rows: 2,
            }}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            className={classes.swiper}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevButtonRef.current
                swiper.params.navigation.nextEl = nextButtonRef.current

                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Grid]}
          >
            {
              data.map(item => (
                <SwiperSlide key={item.id}>
                  <ProductCard data={item} added={productIdCart.includes(item.id)} />
                </SwiperSlide>
              ))
            }
          </Swiper>
    </>
  )
}

export default TwoRowProducts;
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Button, IconButton, makeStyles, Typography } from '@material-ui/core';
import CompareIcon from '@material-ui/icons/Compare';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Rating } from '@material-ui/lab';
import clsx from 'clsx';
import React from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import QuantityComponent from './QuantityComponent';
import { useWindowSize } from 'hooks/input.hooks';
import { useDispatch } from 'react-redux';
import { addProductCart, notifyCart } from 'redux/cart/actions';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    background: 'white',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      flexWrap: 'wrap',
    },
  },

  status: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    width: 50,
    padding: 2,
    borderRadius: '0px 0px 5px 5px',
    background: '#f4a51c',
    textAlign: 'center',
    '& span': {
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'Lato',
    },
  },

  imageContainer: {
    display: 'flex',
    [theme.breakpoints.down("xs")]: {
      flexWrap: 'wrap-reverse',
    },
  },
  imgThumb: {
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
    '& .swiper-slide': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  thumbItem: {
    opacity: 0.5,
    width: 60,
    height: 60,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 8,
    '& img': {
      width: 'inherit',
      objectFit: 'contain',
    },
  },

  thumbActive: {
    opacity: 1,
  },

  selectedImage: {
    width: 350,
    height: 350,
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 300,
    },
    overflow: 'hidden',
    '& img': {
      width: 'inherit',
      objectFit: 'contain'
    },
    display: 'flex',
  },

  content: {
    padding: 10,
  },

  productName: {
    fontSize: 20,
    fontFamily: 'Lato',
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  viewer: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
    marginBottom: 10,
  },

  priceContainer: {
    display: 'flex',
    marginBottom: 10,
  },

  oldPrice: {
    fontWeight: 600,
    fontSize: 18,
    textDecoration: 'line-through',
    fontFamily: 'Lato',
    color: '#686868',
  },

  newPrice: {
    fontWeight: 600,
    marginLeft: 20,
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#fb6f92',
  },

  description: {
    fontFamily: 'Lato',
    fontSize: 14,
    color: '#686868',
    lineHeight: 1.4,
  },

  buttonContainer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    columnGap: 20,
    rowGap: 15,
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  groupIconButton: {
    display: 'flex',
    minWidth: 140,
    // padding: '10px 0px',
    justifyContent: 'flex-start',
    columnGap: 20,
  },

  addtocartBtn: {
    background: '#fb6f92',
    textTransform: 'none',
    color: 'white',
    fontSize: 16,
    padding: '6px 12px',
    '&:hover': {
      background: '#ff8fab',
    },
  },

  iconButton: {
    border: 'solid 1px #686868',
    padding: 8,
  },
}))

function ProductCardDetail({ data, productIdCart }) {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const classes = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [indexActive, setIndexActive] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  const getQuantity = (value) => {
    setQuantity(value);
  };

  const handleOnSlideChange = (swiper) => {
    setIndexActive(swiper.activeIndex);
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...data,
      quantity,
      totalPrice: data.newPrice,
    };
    dispatch(addProductCart(cartItem));
    dispatch(notifyCart(true));
  };

  return (
    <div className={classes.container}>
      {
        (data.status.length > 0) && (
          <div className={classes.status}>
            <span>{data.status[0]}</span>
          </div>
        )
      }
      <div className={classes.imageContainer}>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          slidesPerGroup={1}
          watchSlidesProgress={true}
          direction={width > 640 ? "vertical" : "horizontal"}
          modules={[FreeMode, Navigation, Thumbs]}
          className={classes.imgThumb}
          style={{marginRight: 10}}
        >  
          <SwiperSlide>
            <div className={clsx(classes.thumbItem, {
              [classes.thumbActive]: indexActive === 0,
            })}>
              <img alt='' src={data.mainImage} />
            </div>
          </SwiperSlide>
          {
            data.extraImage1 && (
              <SwiperSlide>
                <div className={clsx(classes.thumbItem, {
                  [classes.thumbActive]: indexActive === 1,
                })}>
                  <img alt='' src={data.extraImage1} />
                </div>
              </SwiperSlide>
            )
          }

          {
            data.extraImage2 && (
              <SwiperSlide>
                <div className={clsx(classes.thumbItem, {
                  [classes.thumbActive]: indexActive === 2,
                })}>
                  <img alt='' src={data.extraImage2} />
                </div>
              </SwiperSlide>
            )
          }

          {
            data.extraImage3 && (
              <SwiperSlide>
                <div className={clsx(classes.thumbItem, {
                  [classes.thumbActive]: indexActive === 2,
                })}>
                  <img alt='' src={data.extraImage3} />
                </div>
              </SwiperSlide>
            )
          }

        </Swiper>
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={classes.selectedImage}
          onSlideChangeTransitionStart={handleOnSlideChange}
        >
          {
            data.mainImage && (
              <SwiperSlide>
                <img alt='' src={data.mainImage} />
              </SwiperSlide>
            )
          }

          {
            data.extraImage1 && (
              <SwiperSlide>
                <img alt='' src={data.extraImage1} />
              </SwiperSlide>
            )
          }

          {
            data.extraImage2 && (
              <SwiperSlide>
                <img alt='' src={data.extraImage2} />
              </SwiperSlide>
            )
          }

          {
            data.extraImage3 && (
              <SwiperSlide>
                <img alt='' src={data.extraImage3} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      <div className={classes.content}>
        <Typography className={classes.productName}>{data.name}</Typography>
        <Rating name="read-only" value={4} readOnly />
        <Typography className={classes.viewer}> (1 customer review)</Typography>
        <div className={classes.priceContainer}>
          { data.oldPrice && 
            <>
              <Typography className={classes.oldPrice}>{`$ ${data.oldPrice}`}</Typography>
              <Typography>  &nbsp; -   &nbsp; </Typography>
            </>
          }
          <Typography className={classes.newPrice}>$ {data.newPrice}</Typography>
        </div>
        <div className={classes.description}>
          {data.description}
        </div>
        <div className={classes.buttonContainer}>
          <QuantityComponent onChangeValue={(value) => getQuantity(value)} />
          {
            productIdCart.includes(data.id) ? (
              <Button 
                className={classes.addtocartBtn}
              > 
                View Cart
              </Button>
            ) : (
              <Button 
                className={classes.addtocartBtn}
                onClick={handleAddToCart}
              > 
                Add to cart
              </Button>
            )
          }
          <div className={classes.groupIconButton}>
            <IconButton className={classes.iconButton} >
              <FavoriteIcon />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <CompareIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductCardDetail;
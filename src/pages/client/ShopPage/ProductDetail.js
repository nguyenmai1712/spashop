import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OneRowProduct from 'components/OneRowProduct';
import ProductCardDetail from 'components/ProductCardDetail';
import React from 'react';
import TabProductInfo from './TabProductInfo';
import { productsData } from 'pages/FakeData';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductComments } from 'redux/productComment/selector';


const useStyles = makeStyles((theme) => ({
  pageItem: {
    marginBottom: 20,
  },

  categories: {
    marginBottom: 20,
    background: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: 10,
    padding: '20px 10px',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.08)',
  },

  textTags: {
    fontFamily: 'Lato',
    fontSize: 14,
  },

}));

function ProductDetail({ productIdCart }) {
  const productComments = useSelector(getProductComments);

  const classes = useStyles();
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },[location])

  return (
    <div className={classes.container}>
      <div className={classes.pageItem}>
        <ProductCardDetail data={location.state.data} productIdCart={productIdCart}/>
      </div>
      <div className={classes.pageItem}>
        <TabProductInfo productComments={productComments} />
      </div>

      <div className={classes.categories}>
        <Typography className={classes.textTags}>
          Categories:&nbsp;&nbsp;
          <span
            style={{
              color: '#fb6f92',
            }}
          >
            Accessories, Audio, Home Appliances, New Arrival, On Sale, Speaker
          </span>
        </Typography>
        <Typography className={classes.textTags}>
          Tags:&nbsp;&nbsp;
          <span
            style={{
              color: '#fb6f92',
            }}
          >
            music, sound, speaker
          </span>
        </Typography>
      </div>

      <div className={classes.pageItem}>
        <OneRowProduct data={productsData} title="Related Products" productIdCart={productIdCart} />
      </div>
    </div>
  )
}

export default ProductDetail;
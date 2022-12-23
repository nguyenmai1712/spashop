import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ToCurrency from 'Utils/FormatNumber';

const useStyles = makeStyles(() => ({
  itemRecommendcontainer: {
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    '&:hover': {
      color: '#f4a51c',
      cursor: 'pointer',
    }
  },

  contentContainer: {
    paddingLeft: 10,
  },

  productImage: {
    width: 60,
    height: 60,
    border: 'solid 0.5px #d9d5d5',
  },

  productName: {
    color: '#686868',
    fontWeight: 600,
    fontSize: 13,
    fontFamily: 'Lato',
    '&:hover': {
      color: '#fb6f92',
      cursor: 'pointer',
    },
  },

  oldPrice: {
    color: '#686868',
    textDecoration: 'line-through',
    fontSize: 14,
    fontFamily: 'Lato',
    marginRight: 30,
  },

  newPrice: {
    color: '#df971a',
    fontSize: 14,
    fontFamily: 'Lato',
  },
}));

function ItemProductRecommend({ item, containerWidth }) {
  const history = useHistory();
  const classes = useStyles();

  const handleNavigate = () => {
    history.push({
      pathname: `/shop-page/products/${item.id}`,
      state: {
        data: item,
      },
    })
  };

  return (
    <div className={classes.itemRecommendcontainer} onClick={handleNavigate}>
      <div className={classes.imageContainer}>
        <Avatar variant='square' src={item.mainImage} className={classes.productImage} />
      </div>
      <div className={classes.contentContainer}>
        <Typography className={classes.productName}>
          {(containerWidth < 200) ? `${item.name.slice(0, 10)}...` : item.name}
        </Typography>
        <Grid container alignItems="center" justifyContent="flex-start">
          {
            item.oldPrice && (
              <Grid item xs={12} sm={12} md={12} lg={item.oldPrice ? 6 : 1}>
                <Typography className={classes.oldPrice}>{ToCurrency(item.oldPrice)}đ</Typography>
              </Grid>
            )
          }
          <Grid item xs={12} sm={12} md={12} lg={item.oldPrice ? 6 : 11}>
            <Typography className={classes.newPrice}>{ToCurrency(item.newPrice)}đ</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ItemProductRecommend;
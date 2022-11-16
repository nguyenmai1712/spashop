import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ShoppageHeader from 'components/ShoppageHeader';

import { productsData } from 'pages/FakeData';
import ProductCard from 'components/ProductCard';

const useStyles = makeStyles(() => ({
  productContainer: {
    // background: 'white',
    // boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
}));

const breadcrumbsList = {
  list: [
    { text: 'Home', link: '/home' },
  ],
  active: 'Products',
};

function ShopPage({ productIdCart }) {
  const classes = useStyles();
  const [isHorizontal, setHorizontal] = React.useState(false);
  const amountOfProduct = productsData.length;

  const getHorizontal = (value) => {
    console.log(value);
    setHorizontal(value);
  };

  return (
    <div className={classes.container}>
      <>
        <ShoppageHeader onHorizontal={getHorizontal} amountOfProduct={amountOfProduct} breadcrumbsList={breadcrumbsList} title="Danh sách sản phẩm"/>
      </>
      <Grid container className={classes.productContainer}>
        {
          productsData.map(item => (
            <Grid 
              item
              xs={isHorizontal ? 12 : 6}
              md={isHorizontal ? 12 : 4}
              lg={isHorizontal ? 12 : 3}
              key={item.id}
            >
              <ProductCard data={item} horizontal={isHorizontal} added={productIdCart.includes(item.id)}/>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default ShopPage;
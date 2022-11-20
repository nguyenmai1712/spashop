import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Typography,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import ToCurrency from 'Utils/FormatNumber';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    minHeight: 400,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    justifyContent: 'flex-start',
    height: 60,
    borderBottom: '1px solid #F1F5F9',
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1E293B',
  },
  content: {
    padding: theme.spacing(0, 2, 2, 2),
  },

  productItem: {
    '&:not(:last-child)': {
      borderBottom: 'solid 1px #E2E8F0',
    },
  },

}));
const data = [
  {
    Product: 'Honey Tea',
    link: '/products/honey-tea',
    access_times: '555',
  },
  {
    Product: 'Espresso Coffee',
    link: '/products/oloong-milktea',
    access_times: '1457',
  },
  {
    Product: 'Blue Sea Mojito',
    link: '/products/bluesea-mojito',
    access_times: '754',
  },
  {
    Product: 'Smoothie Coconut',
    link: '/products/smoothie-coconut',
    access_times: '862',
  },
  {
    Product: 'Machiato Lotus Tea',
    link: '/products/lotus-tea',
    access_times: '1569',
  },
];
function TopVisitedProducts() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div cotainer className={classes.header}>
        <Typography className={classes.title}> Top 5 sản phẩm được bán chạy</Typography>
      </div>
      <div className={classes.content}>
        {data.map((menuitem) => (
          <Grid key={menuitem.Product} className={classes.productItem}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid>
                <Title>
                  {menuitem.Product}
                </Title>
                <Text>
                  {menuitem.link}
                </Text>
              </Grid>
              <Grid>
                <Typography style={{ color: '#1E293B', fontSize: 16 }}>
                  {ToCurrency(menuitem.access_times)}
                  {' '}
                  <span style={{ color: '#64748B' }}>
                    lượt bán
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default TopVisitedProducts;

const Title = styled.p`
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-style: bold;
  color: #000000;
`;
const Text = styled.p`
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-weight: normal;
  color: #9D9D9D;
`;

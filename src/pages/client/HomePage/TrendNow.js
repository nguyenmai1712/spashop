import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TwoRowProducts from 'components/TwoRowProducts';
import PropTypes from 'prop-types';
import React from 'react';

import { productsData } from '../../FakeData';

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
    fontSize: 10,
  },

  navButton: {
    marginLeft: 5,
    background: 'white',
    '&:hover': {
      background: '#f3f3f3',
      color: '#df971a'
    },
  },

  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },

  tabChildren: {
    textTransform: 'none',
    fontSize: '14px',
    fontFamily: 'Lato',
    minWidth: 30,
    '&.Mui-selected': {
      color: '#fb6f92',
    },
  },

  tabBar: {
    color: "#686868",
    '& .MuiTabs-flexContainer': {
      justifyContent: 'flex-end',
    },
  },

  productItem: {

  },

}))

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      className={classes.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        padding: 10,
        background: 'white',
        width: '100%',
      }}
    >
      {value === index && (
        <>
          {props.children}
        </>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TrendNow({ productIdCart }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item sm={12} md={12} lg={3}>
          <Typography className={classes.title}> Trending </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={9}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={9} sm={10}>
            <div className={classes.root}>
              <AppBar position="static" className={classes.appBar}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  TabIndicatorProps={{
                    style: {
                      display: 'none',
                    },
                  }}
                  className={classes.tabBar}
                >
                  <Tab label="Most Popular" className={classes.tabChildren} />
                  <Tab label="New Arrial" className={classes.tabChildren} />
                  <Tab label="On Sale" className={classes.tabChildren} />
                </Tabs>
              </AppBar>
            </div>
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
      </Grid>
      <Grid container>
        <TabPanel value={value} index={0}>
          <TwoRowProducts 
            data={productsData}
            nextButtonRef={navigationNextRef}
            prevButtonRef={navigationPrevRef}
            productIdCart={productIdCart}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TwoRowProducts 
            data={productsData}
            nextButtonRef={navigationNextRef}
            prevButtonRef={navigationPrevRef}
            productIdCart={productIdCart}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TwoRowProducts 
            data={productsData}
            nextButtonRef={navigationNextRef}
            prevButtonRef={navigationPrevRef}
            productIdCart={productIdCart}
          />
        </TabPanel>

      </Grid>
    </div>
  )
}

export default TrendNow;
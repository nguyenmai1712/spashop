import { Grid, makeStyles } from '@material-ui/core';
import AboutCard from 'components/AboutCard';
import Banner from 'components/Banner';
import CollapseCustom from 'components/CollapseCustom';
import PopularCard from 'components/RecommendCard';
import ShowCase from 'components/ShowCase';
import StoreUpdate from 'components/StoreUpdate';
import StoreWidget from 'components/StoreWidget';
import TagCloud from 'components/TagCloud';
import React from 'react';

import ListComponent from '../../../components/ListComponent';


const useStyles = makeStyles((theme) => ({
  container: {
    margin: 10,
  },

  leftSideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },

  rightSideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },

  bodyContent: {

  },

  options: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    }
  },

  item: {
    marginBottom: 20,
  },

  mobileContainer: {
    width: '100%',
    display: 'none',
    [theme.breakpoints.down("sm")]: {
      display: 'block',
    },
  },

}))


function Body({ children, location, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item md={2} lg={2} className={classes.leftSideBar}>
          <div className={classes.item}>
            <ListComponent name="Danh mục" data={props.categoryData} location={location} />
          </div>
          <div className={classes.item}>
            <PopularCard data={props.popularData} name={"Popular"} />
          </div>
          <div className={classes.item}>
            <TagCloud data={props.tagCloudData} />
          </div>
          <div className={classes.item}>
            <Banner />
          </div>
        </Grid>
        <Grid item sm={12} md={8} lg={8} className={classes.bodyContent}>
          {children}
        </Grid>
        <Grid item md={2} lg={2} className={classes.rightSideBar}>
          <div className={classes.item}>
            <StoreWidget />
          </div>
          <div className={classes.item}>
            <AboutCard />
          </div>
          <div className={classes.item}>
            <StoreUpdate />
          </div>
          <div className={classes.item}>
            <ShowCase />
          </div>
        </Grid>
      </Grid>
      <div className={classes.mobileContainer}>
        <div className={classes.item}>
          <CollapseCustom title={"Popular"}>
            <PopularCard data={props.popularData} name={"popular-pollapse"} collapse />
          </CollapseCustom>
        </div>

        <div className={classes.item}>
          <CollapseCustom title={"Best Offers"}>
            <StoreWidget />
          </CollapseCustom>
        </div>

        <div className={classes.item}>
          <CollapseCustom title={"About Us"}>
            <AboutCard />
          </CollapseCustom>
        </div>

        <div className={classes.item}>
          <CollapseCustom title={"Show Case"}>
            <ShowCase  collapse/>
          </CollapseCustom>
        </div>



      </div>
    </div>
  )
}

export default React.memo(Body);
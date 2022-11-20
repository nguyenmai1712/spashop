import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import spaIcon from 'assets/icons/spa_logo.png';
import ItemProductRecomend from 'components/ItemProductRecommend';
import MenuComponent from 'components/MenuComponent';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    background: 'white',
    marginTop: 20,
    padding: '0px 20px 20px 20px',
  },
  branch: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  branchName: {
    fontSize: 17,
    fontWeight: 400,
    color: 'black',
    fontFamily: 'Orbitron',
    marginLeft: 10,
  },
  textFooter: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: 'black',
    fontWeight: 500,
    marginBottom: 10,
  },
  recommendProducts: {
    width: '70%',
  },
}))

const footerMenuData = [
  {
    id: 1,
    label: 'Privicy Policy',
    link: '/privicy-policy',
    subMenu: [],
  },
  {
    id: 2,
    label: 'Refund Policy',
    link: '/refund-policy',
    subMenu: [],
  },
  {
    id: 3,
    label: 'Term & Conditions',
    link: '/term-and-conditions',
    subMenu: [],
  },
];


function Footer({ location, popularData }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          style={{ borderBottom: 'solid 0.5px #d5d3d3', marginBottom: 20 }}
        >
          <MenuComponent data={footerMenuData} location={location} />
        </Grid>

        <Grid container item xs={12}>
          {/* 1/2 footer1 */}
          <Grid container item xs={12} sm={6} md={6} lg={6} spacing={2}>
            {/* 1/4 footer */}
            <Grid container item xs={12}>
              {/* 1/8 footer */}
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12} className={classes.branch}>
                  <Avatar variant='square' src={spaIcon}></Avatar>
                  <Typography className={classes.branchName}> Smile Spa </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.textFooter}>
                    Nullam porttitor pharetra ullamcorper. Praesent varius erat vitae nibh. Suspendisse consectetur ipsum augue, a varius enim tempus a. Phasellus id nibh arcu.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    End Points
                  </Typography>
                  <Typography className={classes.textFooter}>Orders</Typography>
                  <Typography className={classes.textFooter}>Addresses</Typography>
                  <Typography className={classes.textFooter}>Downloads</Typography>
                  <Typography className={classes.textFooter}>Account details</Typography>
                  <Typography className={classes.textFooter}>Lost Password</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              {/* 1/8 footer */}
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Connect With Us
                  </Typography>
                  <Typography className={classes.textFooter}>Facebook</Typography>
                  <Typography className={classes.textFooter}>Twitter</Typography>
                  <Typography className={classes.textFooter}>Instagram</Typography>
                  <Typography className={classes.textFooter}>Whatsapp</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    More About Store
                  </Typography>
                  <Typography className={classes.textFooter}>Multiple Branches</Typography>
                  <Typography className={classes.textFooter}>Take Franchise</Typography>
                  <Typography className={classes.textFooter}>Scheduled Offers</Typography>
                  <Typography className={classes.textFooter}>More Links</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={6} md={6} lg={6}>
            {/* 1/4 footer */}
            <Grid container item xs={12} sm={6} md={6} lg={6}>
              {/* 1/8 footer */}
              <div className={classes.recommendProducts}>
                <Typography className={classes.subTitle}> Products</Typography>
                {
                  popularData.slice(0, 4).map(item => (
                    <ItemProductRecomend item={item} key={item.id}/>
                  ))
                }
              </div>
            </Grid>
            <Grid container item xs={12} sm={6} md={6} lg={6} spacing={2}>
              {/* 1/8 footer */}
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Contact Details
                  </Typography>
                  <Typography className={classes.textFooter}>
                    Address: 3548 Columbia Mine Road,
                  </Typography>
                  <Typography className={classes.textFooter}>Wheeling, West Virginia,</Typography>
                  <Typography className={classes.textFooter}>26003</Typography>
                  <Typography className={classes.textFooter}>Contact : 304-559-3023</Typography>
                  <Typography className={classes.textFooter}>304-650-2694</Typography>
                  <Typography className={classes.textFooter}>E-mail : shopnow@store.com</Typography>
                  <Typography className={classes.textFooter}>contact@top.com</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
              <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Offline Stores
                  </Typography>
                  <Typography className={classes.textFooter}>
                    Address: 3548 Columbia Mine Road,
                  </Typography>
                  <Typography className={classes.textFooter}>Delhi</Typography>
                  <Typography className={classes.textFooter}>Chandigarh</Typography>
                  <Typography className={classes.textFooter}>Indore</Typography>
                  <Typography className={classes.textFooter}>Ahmedabad</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Grid 
          container item xs={12}
          justifyContent="center"
          alignItems="center"
          style={{
            borderTop: 'solid 0.5px #d5d3d3',
            paddingTop: 20,
            marginTop: 10,
          }}
        >
          <Typography className={classes.textFooter}>© 2022 Smile Spa Coding by Mai Mai</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;
import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from 'redux/sidebarMenu/action';

import MenuComponent from 'components/MenuComponent';
import { menuData } from 'pages/FakeData';

const useStyles = makeStyles((theme) => ({
  contianer: {
    background: 'white',
  },

  callButton: {
    marginRight: 10,
    background: '#fb6f92',
    '&:hover': {
      background: '#ff8fab',
    },
    '&.MuiIconButton-root': {
      padding: 7,
    }
  },

  contact: {
    display: 'flex',
    alignItems: 'center',
  },

  phoneNumber: {
    [theme.breakpoints.down("xs")]: {
      display: 'none',
    },
  },

  iconMenu: {
    [theme.breakpoints.up("md")]: {
      display: 'none',
    },
    borderRadius: 4,
    backgroundColor: '#fb6f92',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#ff8fab',
    },
  },

}))

function Menu({ location }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openSideBarMenu = (value) => {
    dispatch(toggleMenu(value));
  };

  return (
    <div className={classes.contianer}>
      <Grid container style={{ padding: 5 }}>
        <Grid
          item
          xs={10}
          sm={8}
          md={9}
          lg={10}
        >
          <MenuComponent data={menuData} location={location} />
          <IconButton className={classes.iconMenu} onClick={() => openSideBarMenu(true)} >
            <MenuIcon />
            <Typography
              style={{
                fontSize: 16,
                fontFamily: 'Lato',
                fontWeight: 600,
              }}
            >
              Menu & Danh mục
            </Typography>
          </IconButton>
        </Grid>
        <Grid
          item
          xs={2}
          sm={4}
          md={3}
          lg={2}
          className={classes.contact}
        >
          <a
            href='tel:035 2642 497'
            style={{
              marginRight: 10,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#686868',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton className={classes.callButton}>
              <PhoneInTalkIcon style={{ color: 'white' }} />
            </IconButton>
            <Typography className={classes.phoneNumber}>+8435 2642 497</Typography>
          </a>
        </Grid>
      </Grid>
    </div>
  )
}

export default Menu;
import React from 'react';
import {
  Avatar, Badge, Grid, IconButton,
  InputAdornment, makeStyles, TextField, Typography,
} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from 'redux/cart/actions'
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import spaIcon from 'assets/icons/spa_logo.png'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { productCarts } from 'redux/cart/selector';
import ToCurrency from 'Utils/FormatNumber';
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#fb6f92',
  },
  greeting: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
    fontFamily: 'Inter',
    [theme.breakpoints.down("xs")]: {
      textAlign: 'center',
    }
  },
  headerOne: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'solid 1px white',
  },
  headerContainerIcons: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down("xs")]: {
      justifyContent: 'center',
    },
    '& .MuiIconButton-root': {
      padding: 2,
    }
  },
  socialIcon: {
    color: 'white',
  },
  headerTwo: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  branch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  branchName: {
    fontSize: 32,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    fontWeight: 400,
    color: 'white',
    fontFamily: 'Orbitron',
    marginLeft: 10,
  },

  headerSearch: {
    [theme.breakpoints.down('xs')]: {
      margin: '10px 0px',
    },
  },

  textField: {
    width: '100%',
    background: 'white',
    borderRadius: '4px !important',
    color: '#0096C7',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'solid 2px #ffc2d1',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffc2d1',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffc2d1',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
  },

  searchButton: {
    background: '#ffc2d1',
    '&:hover': {
      background: '#ff8fab',
    },
    '&.MuiIconButton-root': {
      padding: 7,
      borderRadius: 6
    }
  },

  resize: {
    height: 10,
    fontSize: 18,
  },

  optionItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:not(:last-child)': {
      borderRight: 'solid 1px white',
      [theme.breakpoints.down("md")]: {
        borderRight: 'none',
      },
    }
  },

  mainOptionName: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Anek Malayalam',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  subOptionName: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
    '&:hover': {
      color: '#B3FFEC',
      cursor: 'pointer'
    },
  },

  cartButton: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    '&:hover': {
      color: '#B3FFEC',
      cursor: 'pointer'
    },
  },

  totalPrice: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  iconButton: {
    color: 'white',
    transition: 'all ease-in-out .5s',
    '&:hover': {
      color: '#f4a51c',
      cursor: 'pointer'
    },
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  customBadge: {
    color: 'white',
    background: 'black',
  },

  menuIcon: {
    [theme.breakpoints.down("xs")]: {
      display: 'none',
    }
  },

  mobileMenuIcon: {
    [theme.breakpoints.up("sm")]: {
      display: 'none',
    },
  }

}));

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const productCart = useSelector(productCarts);
  const totalPrice = productCart.reduce((result, item) => {
    return result + item.totalPrice
  }, 0);

  const clickOpen = (value) => {
    dispatch(toggleCart(value))
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <div className={classes.header}>
      <Grid
        container
        className={classes.headerOne}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography className={classes.greeting}> Chào mừng bạn đến với Smile Spa!</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div className={classes.headerContainerIcons}>
            <IconButton>
              <FacebookIcon className={classes.socialIcon} />
            </IconButton>
            <IconButton>
              <PinterestIcon className={classes.socialIcon} />
            </IconButton>
            <IconButton>
              <InstagramIcon className={classes.socialIcon} />
            </IconButton>
            <IconButton>
              <YouTubeIcon className={classes.socialIcon} />
            </IconButton>
            <IconButton>
              <TwitterIcon className={classes.socialIcon} />
            </IconButton>
            <IconButton>
              <LanguageIcon className={classes.socialIcon} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.headerTwo}
      >
        {/* brand */}
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={3}
          className={classes.branch}
        >
          <div style={{ display: 'flex', alignItems:'center' }}>
            <Avatar variant='square' src={spaIcon}></Avatar>
            <Typography className={classes.branchName}> Smile Spa </Typography>
          </div>
          <Grid
            item
            container
            justifyContent='center'
            xs={4}
            className={classes.mobileMenuIcon}
          >
            <Grid
              item
              xs={4}
              className={classes.optionItem}
            >
              <Typography className={classes.mainOptionName}> My Favourite </Typography>
              <Typography className={classes.subOptionName}>
                Wishlist
              </Typography>
              <IconButton className={classes.iconButton}>
                <FavoriteBorderIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={4}
              className={classes.optionItem}
            >
              <Typography className={classes.mainOptionName}> Sign In/Sign Up</Typography>
              <Typography className={classes.subOptionName} onClick={() => handleNavigate("/login")}>
                My Account
              </Typography>
              <IconButton className={classes.iconButton} onClick={() => handleNavigate("/login")}>
                <AccountCircleIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={4}
              className={classes.optionItem}
              onClick={() => clickOpen(true)}
            >
              <Badge
                badgeContent={productCart.length}
                overlap="rectangular"
                className={classes.cartButton}
                classes={{ badge: classes.customBadge }}
              >
                <LocalMallIcon />
                {
                  totalPrice > 0 && (
                    <Typography
                      className={classes.totalPrice}
                    >
                      ${ToCurrency(totalPrice)}
                    </Typography>
                  )
                }
              </Badge>
            </Grid>
          </Grid>
        </Grid>
        {/* search input */}
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          className={classes.headerSearch}
        >
          <TextField
            id="outlined-start-adornment"
            className={classes.textField}
            placeholder="Tìm kiếm..."
            InputProps={{
              endAdornment: <InputAdornment position="start">
                <IconButton className={classes.searchButton}>
                  <SearchIcon style={{ color: 'white' }} />
                </IconButton>
              </InputAdornment>,
              classes: { input: classes.resize }
            }}
            variant="outlined"
          />
        </Grid>
        {/* three icons */}
        <Grid
          item
          container
          justifyContent='flex-end'
          xs={12}
          sm={3}
          md={3}
          lg={4}
          className={classes.menuIcon}
        >
          <Grid
            item
            xs={4}
            className={classes.optionItem}
          >
            <Typography className={classes.mainOptionName}> My Favourite </Typography>
            <Typography className={classes.subOptionName}>
              Wishlist
            </Typography>
            <IconButton className={classes.iconButton}>
              <FavoriteBorderIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={4}
            className={classes.optionItem}
          >
            <Typography className={classes.mainOptionName}> Sign In/Sign Up</Typography>
            <Typography className={classes.subOptionName} onClick={() => handleNavigate("/login")}>
              My Account
            </Typography>
            <IconButton className={classes.iconButton} onClick={() => handleNavigate("/login")}>
              <AccountCircleIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={4}
            className={classes.optionItem}
            onClick={() => clickOpen(true)}
          >
            <Badge
              badgeContent={productCart.length}
              overlap="rectangular"
              className={classes.cartButton}
              classes={{ badge: classes.customBadge }}
            >
              <LocalMallIcon />
              {
                totalPrice > 0 && (
                  <Typography
                    className={classes.totalPrice}
                  >
                    ${ToCurrency(totalPrice)}
                  </Typography>
                )
              }
            </Badge>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header;
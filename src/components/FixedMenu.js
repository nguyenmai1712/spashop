import React from 'react';
import { Avatar, IconButton, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import MenuComponent from 'components/MenuComponent';
import spaIcon from 'assets/icons/spa_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from 'redux/cart/actions';
import { toggleMenu } from 'redux/sidebarMenu/action';
import { isOpenSelector, productCarts } from 'redux/cart/selector';
import { useScrollWindow } from 'hooks/input.hooks';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from 'react-router-dom';
import {menuData} from '../pages/FakeData';


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    right: 0,
    left: 0,
    background: 'white',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.2)',
    zIndex: 9999,
    transform: 'translateY(-100px)',
    transition: 'all ease-in-out .5s',
  },

  logoIcon: {
    [theme.breakpoints.down('xs')]: {
      width: ({ openSearch }) => (openSearch ? 0 : '100%'),
    },
    transition: 'all ease-in .3s',
  },

  groupButton: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      width: ({ openSearch }) => (openSearch ? 0 : '100%'),
    },
    transition: 'all ease-in .3s',
  },

  hideRight: {
    transform: 'translateX(200px)',
    width: 0,
  },

  hideLeft: {
    transform: 'translateX(-200px)',
    width: 0,
  },

  active: {
    transform: 'translateY(0px)',
  },

  iconMenu: {
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
  },

  iconButton: {
    padding: 8,
  },

  menuText: {
    paddingLeft: 10,
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: 600,
    color: '#686868',
  },

  customBadge: {
    color: 'white',
    backgroundColor: '#686868',
    marginLeft: 100,
  },

  iconBrand: {
    width: 30,
    height: 30,
  },

  textField: {
    width: '100%',
    background: 'white',
    borderRadius: '4px !important',
    color: '#0096C7',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'solid 2px #fb6f92',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fb6f92',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fb6f92',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
  },

  resize: {
    height: 6,
    fontSize: 18,
  },

  searchBar: {
    display: ({ openSearch }) => (openSearch ? 'block' : 'none'),
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '5px 10px',
    },
    transition: 'all ease-in .3s',
  },

}))

function FixedMenu({ location }) {
  const history = useHistory();
  const { screenHeight } = useScrollWindow();
  const [openSearch, setOpenSearch] = React.useState(false);
  const classes = useStyles({ screenHeight, openSearch });

  const isMenuOpen = useSelector((state) => state.sideBarMenuReducer);
  const isCartOpen = useSelector(isOpenSelector);
  const productCart = useSelector(productCarts)
  const combineValue = (!isMenuOpen && !isCartOpen);
  const dispatch = useDispatch();


  const handleOpenCart = () => {
    dispatch(toggleCart(true));
  };

  const handleOpenMenu = () => {
    dispatch(toggleMenu(true));
  };

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch)
  };

  return (
    <div className={clsx(classes.container, {
      [classes.active]: (screenHeight > 200 && combineValue),
    })}>
      <div className={clsx(classes.logoIcon, {
        [classes.hideLeft]: openSearch,
      })}>
        <IconButton className={classes.iconMenu} onClick={handleOpenMenu}>
          <Avatar variant='square' src={spaIcon} className={classes.iconBrand}></Avatar>
          <Typography className={classes.menuText}>Menu</Typography>
        </IconButton>
      </div>
      <MenuComponent data={menuData} location={location} />
      <div className={clsx(classes.searchBar, {
        [classes.showSearchBar]: openSearch,
      })}>
        <TextField
          id="outlined-start-adornment"
          className={classes.textField}
          placeholder="Search..."
          autoFocus={true}
          InputProps={{
            endAdornment: <InputAdornment position="start">
              <IconButton className={classes.searchButton} onClick={handleOpenSearch}>
                <CancelIcon style={{ color: '#686868' }} />
              </IconButton>
            </InputAdornment>,
            classes: { input: classes.resize }
          }}
          variant="outlined"
        />
      </div>
      <div className={clsx(classes.groupButton, {
        [classes.hideRight]: openSearch,
      })}>
        <IconButton className={classes.iconButton} onClick={handleOpenSearch}>
          <SearchIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton className={classes.iconButton} onClick={() => history.push("/login")}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton
          onClick={handleOpenCart}
          style={{ color: 'black', margin: '0px 10px 0px 20px' }}
          className={classes.iconButton}
        >
          <Badge
            badgeContent={productCart.length}
            overlap="rectangular"
            classes={{ badge: classes.customBadge }}
          >
            <LocalMallIcon style={{ color: 'black' }} />
          </Badge>
        </IconButton>
      </div>
    </div>
  )
}

export default FixedMenu;
import React from 'react';
import { 
  Avatar, Badge, Grid, IconButton,
  InputAdornment, makeStyles, TextField, Typography,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import storeIcon from 'assets/icons/storeIcon.png'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LocalMallIcon from '@material-ui/icons/LocalMall';



const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#03045E',
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
    borderBottom: 'solid 1px #023E8A',
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
    padding: 20,
    display: 'flex',
    alignItems: 'center',
  },
  branch: {
    display: 'flex',
    alignItems: 'center',
  },
  branchName: {
    fontSize: 32,
    fontWeight: 400,
    color: 'white',
    fontFamily: 'Orbitron',
    marginLeft: 10,
  },

  headerSearch: {

  },

  textField: {
    width: '100%',
    background: 'white',
    borderRadius: '4px !important',
    color: '#0096C7',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'solid 2px #f4a51c',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f4a51c',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f4a51c',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
  },

  searchButton: {
    background: '#f4a51c',
    '&:hover': {
      background: '#df971a',
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
    '&:not(:last-child)': {
      borderRight: 'solid 1px white',
    }
  },

  mainOptionName: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Anek Malayalam',
  },

  subOptionName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
    '&:hover': {
      color: '#f4a51c',
      cursor: 'pointer'
    },
  }

}));

function Header({ openCart }) {
  const classes = useStyles();

  const clickOpen = (value) => {
    openCart(value);
  };

  return (
    <div className={classes.header}>
      <Grid
        container
        className={classes.headerOne}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography className={classes.greeting}> Welcome to TechStore</Typography>
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
        <Grid
          item
          xs={12}
          sm={3}
          className={classes.branch}
        >
          <Avatar variant='square' src={storeIcon}></Avatar>
          <Typography className={classes.branchName}> Tech Store </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          className={classes.headerSearch}
        >
          <TextField
            id="outlined-start-adornment"
            className={classes.textField}
            placeholder="Search..."
            InputProps={{
              endAdornment: <InputAdornment position="start">
                <IconButton className={classes.searchButton}>
                  <SearchIcon style={{color: 'white'}}/>
                </IconButton>
              </InputAdornment>,
              classes: { input: classes.resize }
            }}
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          container
          justifyContent='flex-end'
          xs={12}
          sm={4}
        >
          <Grid
            item
            xs={4}
            className={classes.optionItem}
          >
            <Typography className={classes.mainOptionName}> My Favourite </Typography>
            <Typography className={classes.subOptionName}>
              Wishlist
              <FavoriteBorderIcon />
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            className={classes.optionItem}
          >
            <Typography className={classes.mainOptionName}> Sign In/Sign Up</Typography>
            <Typography className={classes.subOptionName}>
              My Account
              <AssignmentIndIcon />
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            className={classes.optionItem}
            onClick={() => clickOpen(true)}
          >
            <Typography className={classes.mainOptionName}>
              <Badge badgeContent={1} color="secondary" overlap="rectangular">
                Cart
              </Badge>
            </Typography>
            <Typography
              className={classes.subOptionName}
            >
              <LocalMallIcon />
              $50.000
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header;
import { Button, Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  contianer: {
    background: 'white',
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  },
  menuContainer: {
    display: 'flex',
    paddingLeft: 10,
    alignItems: 'center',
    '& a': {
      position: 'relative',
      textDecoration: 'none',
    }
  },
  buttonMenu: {
    borderRadius: 0,
    height: 50,
    // minWidth: 100,
    textTransform: 'none',
    color: '#686868',
    fontSize: 16,
    fontFamily: 'Lato',
    '&:hover': {
      color: '#df971a',
    },
  },

  subMenuContainer: {
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'Column',
    position: 'absolute',
    background: 'white',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 9999,

  },
  buttonSubMenu: {
    minWidth: 250,
    justifyContent: 'flex-start',
    textTransform: 'none',
    color: '#686868',
    fontSize: 16,
    fontFamily: 'Lato',
    '&:hover': {
      color: '#df971a',
    },
  },

  active: {
    color: '#df971a',
  },

  myEffect: {
    animation: `$effect 500ms ${theme.transitions.easing.easeInOut}`,
  },

  '@keyframes effect': {
    '0%': {
      transform: 'translateY(10px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1,
    }
  },
}))

function MenuComponent({ data, location }) {
  const classes = useStyles();
  const [hover, setHover] = React.useState("");
  const history = useHistory();

  const handleOnMouseEnter = (hover) => {
    setHover(hover);
  };

  const handleOnMouseLeave = () => {
    setHover("")
  };

  const handleNavigate = (event,link) => {
    event.stopPropagation();
    history.push(link);
  };

  return (
    <div className={classes.contianer}>
      <Grid container>
        <Grid
          item
          xs={12}
          className={classes.menuContainer}
        >
          {
            data.map(item => {
              const open = hover === item.link;
              return (
                <Link to={item.link} key={item.id} onMouseLeave={handleOnMouseLeave}>
                  <Button
                    className={clsx(classes.buttonMenu, {
                      [classes.active]: (location.includes(item.link)),
                    })}
                    onMouseEnter={() => handleOnMouseEnter(item.link)}
                  >
                    {item.label}
                  </Button>
                  <div
                    className={clsx(classes.subMenuContainer, {
                      [classes.myEffect]: open,
                    })}
                  >
                    {
                      open
                      && item.subMenu.map(sub => (
                        <div key={sub.id}>
                          <Button
                            onClick={(event)=>handleNavigate(event, sub.link)}
                            className={clsx(classes.buttonSubMenu, {
                              [classes.active]: location.includes(sub.link),
                            })}
                          >
                            {sub.label}
                          </Button>
                        </div>
                      ))
                    }
                  </div>
                </Link>
              )
            })
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default MenuComponent;
import { Collapse, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BallotIcon from '@material-ui/icons/Ballot';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  rootList: {
    padding: 0,
    '& .MuiListItemIcon-root': {
      minWidth: 40,
    },
    '& .MuiListItemText-primary': {
      fontSize: 16,
      [theme.breakpoints.down("md")]: {
        fontSize: 14,
      },
      fontFamily: 'Lato',
      fontWeight: 400,
      color: 'white',
    },
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  nested: {
    '& .MuiListItemText-primary': {
      fontSize: 15,
      [theme.breakpoints.down("md")]: {
        fontSize: 12,
      },
      fontWeight: 400,
      color: '#686868',
      '&:hover': {
        color: '#fb6f92',
      }
    },
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        color: '#fb6f92',
      }
    },
  },
  link: {
    position: 'relative',
  },

  subMenuContainer: {
    position: 'absolute',
    top: 0,
    left: '100%',
    background: 'white',
    minWidth: 150,
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',
    zIndex: 9999,
  },

  active: {
    '& .MuiListItemText-primary': {
      color: '#fb6f92',
    },
  },

  myEffect: {
    animation: `$effectIn 500ms ${theme.transitions.easing.easeInOut}`,
  },


  '@keyframes effectIn': {
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

function ListComponent({ name, data, location }) {
  const classes = useStyles();
  const [hover, setHover] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOnMouseEnter = (key) => {
    setHover(key);
  };

  const handleOnMouseLeave = () => {
    setHover("")
  };

  const handleNavigate = (link) => {
    history.push(link);
  };


  return (
    <div className={classes.container}>
      <List className={classes.rootList}>
        <ListItem
          button
          onClick={handleClick}
          style={{
            background: '#fb6f92',
            borderRadius: 4,
          }}
        >
          <ListItemIcon>
            <BallotIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary={name} />
          {open ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          style={{ background: 'white' }}
        >
          <List component="div" disablePadding className={classes.nested} onMouseLeave={handleOnMouseLeave}>
            {
              data.map((item) => {
                const openSub = hover === item.link;
                return (
                  <div className={classes.link} key={item.id} >
                    <ListItem
                      button
                      onClick={() => handleNavigate(item.link)}
                      onMouseEnter={() => handleOnMouseEnter(item.link)}
                    >
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        className={clsx(classes.listItemText, {
                          [classes.active]: location.includes(item.link),
                        }
                        )}
                      />
                      {item.subMenu.length > 0 && <ArrowForwardIosIcon style={{ color: '#686868', fontSize: 14 }} />}
                    </ListItem>
                    <div
                      className={clsx(classes.subMenuContainer, {
                        [classes.myEffect]: openSub,
                      })}
                    >
                      {
                        openSub &&
                        item.subMenu.map(sub => (
                          <div key={sub.id}>
                            <ListItem
                              button
                              onClick={() => handleNavigate(sub.link)}
                            >
                              <ListItemText
                                primary={sub.label}
                                className={clsx(classes.listItemText, {
                                  [classes.active]: location.includes(sub.link),
                                })}
                              />
                            </ListItem>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              })
            }
          </List>
        </Collapse>
      </List>
    </div>
  )
}

export default ListComponent;
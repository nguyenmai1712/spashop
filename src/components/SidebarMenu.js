import { IconButton, makeStyles, Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { useWindowSize } from 'hooks/input.hooks';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleMenu } from 'redux/sidebarMenu/action';

const useStyles = makeStyles((theme) => ({
  container: {

  },

  titleDrawerContainer: {
    borderBottom: 'solid 1px #ddd',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleDrawer: {
    color: '#fb6f92',
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Lato',
  },

  closeBtn: {
    '&:hover': {
      backgroundColor: '#fb6f92',
      color: 'white',
    },
  },

  menuDrawer: {
    width: 320,
    [theme.breakpoints.down("xs")]: {
      width: ({ width }) => width,
    },

    padding: '0px 10px 10px 10px',
  },

  menuContainer: {
    marginBottom: 20,
  },

  mainItem: {
    background: '#fb6f92',
    borderRadius: 4,
    '&:hover': {
      background: '#ff8fab',
    },
    boxShadow: '0px -3px 15px -3px rgba(15, 23, 42, 0.3)',
  },

  listItem: {
    '&:hover .MuiListItemIcon-root': {
      color: '#fb6f92',
    },

    '&:hover .MuiListItemText-primary': {
      color: '#fb6f92',
    },

  },

  collapseMenu: {
    boxShadow: '0px 0px 20px -3px rgba(15, 23, 42, 0.3)',
  },

  subCollapse: {
    '& .MuiCollapse-wrapper': {
      padding: '5px 10px',
    },
  },

  listItemMainText: {
    '& span': {
      color: 'white',
      fontSize: 18,
      fontWeight: 600,
      fontFamily: 'Lato',
    },
  },

  listItemText: {
    '& span': {
      color: '#686868',
      fontSize: 16,
      fontWeight: 800,
      fontFamily: 'Lato',
    },
  },

  active: {
    '& .MuiListItemIcon-root': {
      color: '#fb6f92',
    },

    '& .MuiListItemText-primary': {
      color: '#fb6f92',
    },
  },

  listSubItemText: {
    '& span': {
      color: '#686868',
      fontSize: 16,
      fontFamily: 'Lato',
    },
  },

  activeSubMenu: {
    backgroundColor: '#fb6f92',
    '& .MuiListItemText-primary': {
      fontSize: 16,
      color: 'white',
      fontWeight: 700,
    }
  },

  nested: {
    paddingLeft: theme.spacing(8),
    borderRadius: 10,
    marginTop: 5,
    '&:hover': {
      backgroundColor: '#ff8fab',
    },
    '&:hover .MuiListItemText-primary': {
      fontSize: 16,
      color: 'white',
      fontWeight: 700,
    }
  },

}));



function SidebarMenu({ menuData, categoryData, location }) {
  const isMenuOpen = useSelector((state) => state.sideBarMenuReducer);
  const dispatch = useDispatch();

  const [width] = useWindowSize();
  const classes = useStyles({ width });
  const [isOpenSideMenu, setOpenSideMenu] = React.useState(isMenuOpen);
  const [openMainMenu, setOpenMainMenu] = React.useState(true);
  const [openMainCategories, setOpenMainCategories] = React.useState(false);
  const [menuItem, setMenuItem] = React.useState("");

  const history = useHistory();

  const handleClickMenu = () => {
    setOpenMainMenu(!openMainMenu);
  };

  const handleClickCategories = () => {
    setOpenMainCategories(!openMainCategories);
  };

  const handleClickMenuItem = (item) => {
    if (item.link === menuItem) {
      setMenuItem("");
    } else {
      setMenuItem(item.link);
      if (item.subMenu.length === 0) {
        setOpenSideMenu(false);
        history.push(item.link);
        dispatch(toggleMenu(false));
      };
    }
  };

  const handleClickSubMenuItem = (link) => {
    setOpenSideMenu(false);
    history.push(link);
    dispatch(toggleMenu(false));
  }

  const handleToggleDrawer = (value) => {
    setOpenSideMenu(value);
    !value && dispatch(toggleMenu(value))
  };

  React.useEffect(() => {
    setOpenSideMenu(isMenuOpen);
  }, [isMenuOpen])


  return (
    <div className={classes.container}>
      <Drawer anchor="left" open={isOpenSideMenu} onClose={() => handleToggleDrawer(false)} className={classes.drawer}>
        <div className={classes.titleDrawerContainer}>
          <Typography className={classes.titleDrawer}>Menu & Danh mục </Typography>
          <IconButton className={classes.closeBtn} onClick={() => handleToggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.menuDrawer}>
          <List
            component="nav"
            className={classes.root}
          >
            <div className={classes.menuContainer}>
              <ListItem button onClick={handleClickMenu} className={classes.mainItem}>
                <ListItemText primary="Menu" className={classes.listItemMainText} />
                {openMainMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openMainMenu} timeout="auto" unmountOnExit className={classes.collapseMenu}>
                <List component="div" disablePadding>
                  {
                    menuData.map(item => {
                      const activeMenu = location.includes(item.link);
                      const openSub = menuItem === item.link || activeMenu;
                      return (
                        <div className={classes.listItemContainer} key={item.id}>
                          <ListItem
                            button
                            onClick={() => handleClickMenuItem(item)}
                            className={clsx(classes.listItem, {
                              [classes.active]: activeMenu,
                            })}
                          >
                            <ListItemIcon>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} className={classes.listItemText} />
                            {
                              item.subMenu.length > 0 && (
                                <>
                                  {openSub ? <ExpandLess /> : <ExpandMore />}
                                </>
                              )
                            }
                          </ListItem>
                          {
                            item.subMenu.length > 0 &&
                            item.subMenu.map(sub => (
                              (
                                <Collapse in={openSub} timeout="auto" unmountOnExit key={sub.id} className={classes.subCollapse}>
                                  <List component="div" disablePadding>
                                    <ListItem
                                      button
                                      onClick={() => handleClickSubMenuItem(sub.link)}
                                      className={clsx(classes.nested, {
                                        [classes.activeSubMenu]: location.includes(sub.link),
                                      })}
                                    >
                                      <ListItemText primary={sub.label} className={classes.listSubItemText} />
                                    </ListItem>
                                  </List>
                                </Collapse>
                              )
                            ))
                          }
                        </div>
                      )
                    })
                  }
                </List>
              </Collapse>
            </div>

            <div className={classes.menuContainer}>
              <ListItem button onClick={handleClickCategories} className={classes.mainItem}>
                <ListItemText primary="Categories" className={classes.listItemMainText} />
                {openMainCategories ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openMainCategories} timeout="auto" unmountOnExit className={classes.collapseMenu}>
                <List component="div" disablePadding>
                  {
                    categoryData.map(item => {
                      const activeMenu = location.includes(item.link);
                      const openSub = menuItem === item.link || activeMenu;
                      return (
                        <div className={classes.listItemContainer} key={item.id}>
                          <ListItem
                            button
                            onClick={() => handleClickMenuItem(item)}
                            className={clsx(classes.listItem, {
                              [classes.active]: activeMenu,
                            })}
                          >
                            <ListItemIcon>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} className={classes.listItemText} />
                            {
                              item.subMenu.length > 0 && (
                                <>
                                  {openSub ? <ExpandLess /> : <ExpandMore />}
                                </>
                              )
                            }
                          </ListItem>
                          {
                            item.subMenu.length > 0 &&
                            item.subMenu.map(sub => (
                              (
                                <Collapse in={openSub} timeout="auto" unmountOnExit key={sub.id} className={classes.subCollapse}>
                                  <List component="div" disablePadding>
                                    <ListItem
                                      button
                                      onClick={() => handleClickSubMenuItem(sub.link)}
                                      className={clsx(classes.nested, {
                                        [classes.activeSubMenu]: location.includes(sub.link),
                                      })}
                                    >
                                      <ListItemText primary={sub.label} className={classes.listSubItemText} />
                                    </ListItem>
                                  </List>
                                </Collapse>
                              )
                            ))
                          }
                        </div>
                      )
                    })
                  }
                </List>
              </Collapse>
            </div>
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default SidebarMenu;
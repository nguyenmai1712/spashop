import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0px 0px 15px -3px rgba(15, 23, 42, 0.2)',
    borderRadius: 4,
  },

  listItemText: {
    '& span': {
      fontWeight: 600,
      fontFamily: 'Lato',
      letterSpacing: 2,
    },
  },

}));

export default function CollapseCustom({ title, children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} className={classes.listItemText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </List>
  );
}

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Comment from 'components/Comment';
import PropTypes from 'prop-types';
import React from 'react';
import CommentForm from './CommentForm';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },

  tabChildren: {
    textTransform: 'none',
    fontSize: '14px',
    fontFamily: 'Lato',
    minWidth: 100,
    '&.Mui-selected': {
      color: '#df971a',
    },
  },

  tabBar: {
    color: "#686868",
    '& .MuiTabs-flexContainer': {
      justifyContent: 'flex-start',
    },
  },

  description: {
    padding: 10,
    fontFamily: "Lato",
    fontSize: 15,
    color: '#686868',
    lineHeight: 1.4,
  },

  reviewer: {
    padding: 10,
  },

  commentItem: {
    marginBottom: 10,
  },

}));

export default function TabProductInfo({ productComments }) {
  const rootComment = productComments.filter(item => item.parentId === null);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getReplies = (commentId) => {
    return productComments
    .filter(item => item.parentId === commentId)
    .sort((a,b) =>
      (new Date(a.createAt).getTime() - new Date(b.createAt).getTime())
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.tabBar}
          TabIndicatorProps={{
            style: {
              background: "#df971a",
            },
          }}
        >
          <Tab label="DESCRIPTION" {...a11yProps(0)} className={classes.tabChildren} />
          <Tab label="REVIEWS(1)" {...a11yProps(1)} className={classes.tabChildren} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.description}>
          Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.reviewer}>
          {
            rootComment.map(comment => (
              <div key={comment.id} className={classes.commentItem}>
                <Comment comment={comment} replies={getReplies(comment.id)} currentUserId={1} />
              </div>
            ))
          }
          <CommentForm />
        </div>
      </TabPanel>
    </div>
  );
}
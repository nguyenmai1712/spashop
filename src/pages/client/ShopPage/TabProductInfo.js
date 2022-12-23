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
      color: '#fb6f92',
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
              background: "#fb6f92",
            },
          }}
        >
          <Tab label="Mô tả" {...a11yProps(0)} className={classes.tabChildren} />
          <Tab label="Đánh giá(1)" {...a11yProps(1)} className={classes.tabChildren} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.description}>
        Sản phẩm chứa thành phần chính là Hyaluronic Acid và Glycerin tăng cường khả năng liên kết các phân tử nước và giữ nước cho da giúp da luôn căng mọng, hạn chế tối đa tình trạng da khô ráp, bong tróc.
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
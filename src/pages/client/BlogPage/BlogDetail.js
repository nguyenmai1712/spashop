import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import BreadcrumbCustom from 'components/BreadcrumbCustom';

const useStyles = makeStyles(() => ({

  content: {
    background: 'white',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    padding: 20,
    marginBottom: 20,
  },

  imageFrame: {
    width: '100%',
    overflow: 'hidden',
  },

  image: {
    width: 'inherit',
    objectFit: 'contain',
  },

  description: {
    marginBottom: 20,
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#686868',
  },

  header: {
    margin: '20px 0px',
  },

  title: {
    fontSize: 18,
    letterSpacing: 1.5,
    fontFamily: 'Lato',
    fontWeight: 600,
  },
  
  infor: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
  },

}));

function BlogDetail() {
  const classes = useStyles();
  const location = useLocation();
  const post = location.state.data

  const breadcrumbsList = {
    list: [
      { text: 'Home', link: '/home' },
      { text: 'Blog', link: '/blog' },
    ],
    active: post.title,
  };
  return (
    <div className={classes.container}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography className={classes.title}> {post.title} </Typography>
        </Grid>
        <Grid item>
          <BreadcrumbCustom breadcrumbsList={breadcrumbsList} />
        </Grid>
      </Grid>

      <Grid className={classes.content}>
        <div className={classes.imageFrame}>
          <img alt='' src={post.image} className={classes.image} />
        </div>

        <div className={classes.header}>
          <Typography className={classes.infor}>{`${post.author} - ${post.category} - ${post.date}`}</Typography>
        </div>

        <div className={classes.description}>{post.description}</div>

      </Grid>
    </div>
  )
}

export default BlogDetail;
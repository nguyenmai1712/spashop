import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import CommentForm from 'pages/client/ShopPage/CommentForm';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from 'redux/productComment/actions';

// import avatar from 'assets/images/thuyduong.jpg';
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    padding: 10,
    background: 'white',
    boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.1)',
    borderRadius: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    '& img': {
      objectFit: 'cover',
    }
  },

  content: {
    paddingLeft: 20,
    width: '100%',
  },

  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
  },

  username: {
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
  },

  time: {
    marginLeft: 20,
    fontSize: 13,
    fontFamily: 'Lato',
    color: '#686868',
  },

  comment: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#686868',
    letterSpacing: 1.3,
    margin: '5px 0px',
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 20,
    '& p': {
      fontSize: 15,
      fontFamily: 'Lato',
      color: '#686868',
    },
  },

  buttonIcon: {
    padding: 5,
    fontSize: 12,
    borderRadius: 5,
  },

  replies: {
    marginLeft: 60,
    margin: '10px 0px',
  },

  replyItem: {
    marginBottom: 10,
  },

  rating: {
    marginLeft: 20,
    fontSize: 14,
  },

  replyButton: {
    textTransform: 'none',
    color: '#f4a51c',
    borderRadius: 30,
  },

}))

function Comment({ comment, replies, currentUserId }) {
  const dispatch = useDispatch();
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.user.id;
  const canDelete = currentUserId === comment.user.id;
  const classes = useStyles();
  const [activeComment, setActiveComment] = React.useState(null);

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id))
  };

  const handleReplyComment = (commentId) => {
    if (commentId === activeComment) {
      setActiveComment(null);
    } else {
      setActiveComment(commentId);
    };
  };

  console.log(activeComment);
  return (
    <>
      <div className={classes.container}>
        <div>
          {
            comment.user.avatar ? (
              <Avatar src={comment.user.avatar} className={classes.avatar} />
            ) : (
              <Avatar> {comment.user.fullName.slice(0, 1)}</Avatar>
            )
          }
        </div>
        <div className={classes.content}>
          <div className={classes.headerTitle} >
            <div className={classes.title}>
              <Typography className={classes.username}>{comment.user.fullName}</Typography>
              <Typography className={classes.time}>2 month ago</Typography>
              {comment.rating && <Rating value={comment.rating} readOnly className={classes.rating} />}
            </div>

          </div>
          <div className={classes.comment}>
            {comment.content}
          </div>
          <div className={classes.buttonContainer}>
            {
              canReply && (
                <div className={classes.button}>
                  <IconButton className={classes.buttonIcon} onClick={() => handleReplyComment(comment.id)}>
                    Reply
                  </IconButton>
                </div>
              )
            }
            {
              canEdit && (
                <div className={classes.button}>
                  <IconButton className={classes.buttonIcon}>
                    Edit
                  </IconButton>
                </div>
              )
            }
            {
              canDelete && (
                <div className={classes.button}>
                  <IconButton className={classes.buttonIcon} onClick={() => handleDeleteComment(comment.id)}>
                    Delete
                  </IconButton>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className={classes.replies}>
        
        {
          replies.map(reply => (
            <div className={classes.replyItem} key={reply.id}>
              <Comment comment={reply} replies={[]} currentUserId={currentUserId} />
            </div>
          ))
        }

        {
          (comment.id === activeComment) && <CommentForm activeComment={activeComment} />
        }
      </div>
    </>
  )
}

export default Comment;
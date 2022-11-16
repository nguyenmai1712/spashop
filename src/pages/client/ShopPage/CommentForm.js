import React from 'react';
import { Button, Checkbox, FormControlLabel, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { useInput } from 'hooks/input.hooks';
import { addComment } from 'redux/productComment/actions';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
    padding: 10,
    background: 'white',
    // boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.08)',
  },

  title: {
    fontSize: 17,
    fontFamily: 'Lato',
    fontWeight: 600,
  },

  subTitle: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#686868',
    fontStyle: 'italic',
    marginBottom: 10,
  },

  rating: {
    display: 'flex',
  },

  label: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#686868',
  },

  inputBlock: {
    marginBottom: 10,
  },

  textField: {
    width: '60%',
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
    background: 'white',
    borderRadius: '4px !important',
    color: '#0096C7',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'solid 1px #686868',
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

  saveInfoCheck: {
    marginBottom: 10,
    width: '50%',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
    '& .MuiFormControlLabel-label': {
      fontSize: 14,
      fontFamily: 'Lato',
      color: '#686868',
    },
  },

  submitBtn: {
    textTransform: 'none',
    background: '#f4a51c',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: 600,
    '&:hover': {
      background: '#d38e18',
    },
  },
}))


const CustomCheckbox = withStyles({
  root: {
    color: '#686868',
    '&$checked': {
      color: '#f4a51c',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


function CommentForm({ activeComment }) {
  console.log(activeComment);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [rating, setRating] = React.useState(2);
  const [checked, setChecked] = React.useState(false)

  const { value: review, onChange: onChangeReview } = useInput();
  const { value: name, onChange: onChangeName } = useInput();
  const { value: email, onChange: onChangeEmail } = useInput();

  const randomUserId = "user_"+(Math.random() + 1).toString(36).substring(7) 
  + Math.floor(Math.random() * 1000);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = () => {
    const comment = {
      id: Math.floor(Math.random() * 1000),
      user: {
        id: randomUserId,
        username: "user_"+(Math.random() + 1).toString(36).substring(7),
        avatar: null,
        fullName: name,
        email: email,
      },
      content: review,
      createAt: new Date(),
      parentId: activeComment ? activeComment : null,
      rating,
    }
    dispatch(addComment(comment));
  };

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>Add a new review</Typography>
        <Typography className={classes.subTitle}>
          *** Your email address will not be published. <br />
          Required fields are marked *
        </Typography>
      </div>
      <div className={classes.rating}>
        <Typography className={classes.label}>Your rating*: &nbsp; </Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </div>
      <div className={classes.ratingForm}>
        <div className={classes.inputBlock}>
          <Typography className={classes.label}> Your review* :</Typography>
          <TextField
            className={classes.textField}
            multiline
            minRows={6}
            placeholder="Type your review here..."
            variant="outlined"
            value={review}
            onChange={onChangeReview}
          />
        </div>
        <div className={classes.inputBlock}>
          <Typography className={classes.label}> Name* :</Typography>
          <TextField
            className={classes.textField}
            placeholder="Name"
            variant="outlined"
            size="small"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className={classes.inputBlock}>
          <Typography className={classes.label}> Email* :</Typography>
          <TextField
            className={classes.textField}
            placeholder="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className={classes.saveInfoCheck}>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={checked}
                onChange={handleChecked}
                name="checkedG"
              />
            }
            label="Save my name, email, and website in this browser for the next time I comment."
          />
        </div>
        <div>
          <Button
            className={classes.submitBtn}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CommentForm;
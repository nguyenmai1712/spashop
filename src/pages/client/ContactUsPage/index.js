import { Button, Grid, IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import background from 'assets/images/contactbackground.jpg';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },

  container: {
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down("xs")]: {
      height: '100%',
    },
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },

  header: {
    textAlign: 'center',
    width: '70%',
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      padding: '0px 20px',
    },
  },

  contact: {
    marginTop: 20,
    width: '80%',
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      padding: 20,
    },
  },

  formContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    animation: `$formEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },

  inputContainer: {
    marginBottom: 10,
  },

  label: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#686868',
  },

  title: {
    animation: `$headerEffect 4000ms ${theme.transitions.easing.easeInOut}`,
    fontSize: 32,
    fontFamily: 'Lato',
    fontWeight: 800,
    letterSpacing: 2,
    color: 'white',
  },

  subTitle: {
    animation: `$headerEffect 3000ms ${theme.transitions.easing.easeInOut}`,
    fontSize: 13,
    fontFamily: 'Lato',
    fontWeight: 500,
    letterSpacing: 2,
    color: 'white',
  },

  textField: {
    width: '100%',
    background: 'white',
    borderRadius: '4px !important',
    color: '#0096C7',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'solid 2px #dddd',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff8fab',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff8fab',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
  },

  submitBtn: {
    minWidth: 150,
    textTransform: 'none',
    background: '#fb6f92',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: 600,
    '&:hover': {
      background: '#ff8fab',
    },
  },

  otherContact: {
    animation: `$otherEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },

  contactCard: {
    display: 'flex',
    columnGap: 20,
    padding: 10,
    height: 100,
    borderBottom: 'solid 2px white',
  },

  titleCard: {
    color: '#fb6f92',
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: 600,
  },

  subTitleCard: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '16',
    fontWeight: 600,
  },

  iconButton: {
    background: 'white',
    '&:hover': {
      background: 'white',
    },
  },



  icon: {
    animation: `$iconEffect 3000ms ${theme.transitions.easing.easeInOut} infinite`,
  },

  '@keyframes headerEffect': {
    '0%': {
      transform: 'translateY(-200px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1,
    }
  },

  '@keyframes formEffect': {
    '0%': {
      transform: 'translateX(500px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateX(0px)',
      opacity: 1,
    }
  },

  '@keyframes otherEffect': {
    '0%': {
      transform: 'translateY(2000px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateX(0px)',
      opacity: 1,
    }
  },

  '@keyframes iconEffect': {
    '0%': {
      transform: 'rotate(0deg)',
      // opacity: 0,
    },
    '100%': {
      transform: 'rotate(360deg)',
      // opacity: 1,
    }
  },
}));



function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography className={classes.title}> Liên hệ </Typography>
          <Typography className={classes.subTitle}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </Typography>
        </div>
        <Grid container className={classes.contact}>
          <Grid
            item
            container
            xs={12}
            sm={6}
            md={6}
            lg={8}
            className={classes.otherContact}
          >
            <Grid item xs={12} sm={11} md={10} lg={8}>
              <div className={classes.contactCard}>
                <div>
                  <IconButton className={classes.iconButton}>
                    <LocationOnIcon className={classes.icon} />
                  </IconButton>
                </div>
                <div className={classes.contactInfo}>
                  <Typography className={classes.titleCard}> Địa chỉ </Typography>
                  <Typography className={classes.subTitleCard}> Địa chỉ: 3548 Columbia Mine Road, Wheeling, West Virginia, 26003 </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={11} md={10} lg={8}>
              <div className={classes.contactCard}>
                <div>
                  <IconButton className={classes.iconButton}>
                    <CallIcon className={classes.icon} />
                  </IconButton>
                </div>
                <div className={classes.contactInfo}>
                  <Typography className={classes.titleCard}>Liên hệ</Typography>
                  <Typography className={classes.subTitleCard}> 0352642497 </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={11} md={10} lg={8}>
              <div className={classes.contactCard}>
                <div>
                  <IconButton className={classes.iconButton}>
                    <MailIcon className={classes.icon} />
                  </IconButton>
                </div>
                <div className={classes.contactInfo}>
                  <Typography className={classes.titleCard}> Email </Typography>
                  <Typography className={classes.subTitleCard}> Email: email@mail.com</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            item
            className={classes.formContainer}
          >
            <div className={classes.inputContainer}>
              <Typography className={classes.label}> Name* :</Typography>
              <TextField
                className={classes.textField}
                placeholder="Type your name"
                variant="outlined"
                size="small"
              />
            </div>

            <div className={classes.inputContainer}>
              <Typography className={classes.label}> Email* :</Typography>
              <TextField
                className={classes.textField}
                placeholder="Type your email"
                variant="outlined"
                size="small"
              />
            </div>

            <div className={classes.inputContainer}>
              <Typography className={classes.label}> Phone No* :</Typography>
              <TextField
                className={classes.textField}
                placeholder="Type your phone number"
                variant="outlined"
                size="small"
              />
            </div>

            <div className={classes.inputContainer}>
              <Typography className={classes.label}> Your review* :</Typography>
              <TextField
                className={classes.textField}
                multiline
                minRows={3}
                placeholder="Type your review here..."
                variant="outlined"
              />
            </div>
            <div>
              <Button className={classes.submitBtn}> Gửi </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ContactUs;
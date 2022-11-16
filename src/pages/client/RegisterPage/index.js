import { Button, Grid, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import CheckIcon from '@material-ui/icons/Check';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import messIcon from 'assets/icons/MessageIcon.png';
import background from 'assets/images/loginbg.jpg';
import StepIcon, { Connector } from 'components/StepIcon';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    // [theme.breakpoints.down("xs")]: {
    //   height: '100%',
    // },
    backgroundImage: `url(${background})`,
    // backgroundImage: 'linear-gradient(to right, #ffb3c6 , #fb6f92)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: '0px 00px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  loginContainer: {
    position: 'relative',
    width: 350,
    height: 590,
    [theme.breakpoints.down('sm')]: {
      width: 500,
    },
    [theme.breakpoints.down('xs')]: {
      width: 350,
    },
    padding: '20px 40px',
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: '0px 0px 15px -3px white',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    animation: `$effect 2000ms ${theme.transitions.easing.easeInOut}`,

  },

  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 800,
    fontFamily: 'Varela Round',
  },

  textField: {
    width: '100%',
    height: 40,
    background: 'white',
    color: '#f4a51c',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: "solid 2px #fb6f92",
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fb6f92',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fb6f92',
    },
  },

  inputContainer: {
    marginTop: 20,
    width: '100%',
  },

  inputName: {
    color: '#686868',
    letterSpacing: 1,
  },

  loginBtn: {
    textTransform: 'none',
    width: 'inherit',
    borderRadius: 30,
    fontSize: 16,
    fontWeight: 600,
    color: 'white',
    border: 'solid 2px white',
    backgroundColor: '#fb6f92',
    '&:hover': {
      backgroundColor: '#ffb3c6',
    }
  },

  socialButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  optionTitle: {
    color: '#686868',
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  signupBtn: {
    textTransform: 'none',
    borderRadius: 30,
    color: '#0096C7',
    // border: 'solid 1px #0096C7',
    '&:hover': {
      // backgroundColor: '#ffb3c6',
    }
  },

  forgotPassword: {
    marginTop: 5,
    color: '#0096C7',
    fontSize: 13,
    alignSelf: 'flex-end',
    fontStyle: 'italic',
    '&:hover': {
      cursor: 'pointer',
    }
  },

  circle: {
    margin: theme.spacing(5, 0),
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: '#D3F7FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      borderRadius: '5px',
    },
  },
  circleSuccess: {
    margin: theme.spacing(5, 0),
    width: 88,
    height: 88,
    borderRadius: '50%',
    backgroundColor: '#CEFAE6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleSuccessInner: {
    margin: theme.spacing(5, 0),
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#00B984',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messIcon: {
    boxShadow: '10px 10px 0px #90E0EF',
  },

  verifyEmail: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 600,
  },

  verifyNotify: {
    fontSize: 15,
    color: '#686868',
    fontWeight: 400,
  },

  verifySuccess: {
    fontSize: 28,
    fontWeight: 700,
  },

  '@keyframes effect': {
    '0%': {
      transform: 'translateY(-300px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1,
    }
  },

  root: {
    width: '100%',
    minHeight: 450,
    '&>.MuiStepper-root': {
      padding: '20px 0px 0px 0px',
    }
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backButton: {
    position: 'absolute',
    textTransform: 'none',
    backgroundColor: '#f4a51c',
    color: 'white',
    borderRadius: 30,
    top: 10,
    left: 10,
    zIndex: 9999,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#f4a51c',
    },
    '&.Mui-disabled': {
      backgroundColor: '#ddd',
      color: '#686868',
    }
  },
}));

function getSteps() {
  return ['Account', 'Verify', 'Done'];
}

function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const steps = getSteps();
  const [clearPassword, setClearPassword] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNavigate = (link) => {
    history.push(link);
  };

  function GetStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <div className={classes.inputContainer}>
              <Typography className={classes.inputName}> Email/Số điện thoại </Typography>
              <TextField
                size="small"
                id="outlined-start-adornment"
                className={classes.textField}
                placeholder="Nhập tài khoản đăng kí"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>,
                }}
                variant="outlined"
              />
            </div>

            <div className={classes.inputContainer}>
              <Typography className={classes.inputName}> Mật khẩu </Typography>
              <TextField
                size="small"
                type={clearPassword ? "text" : "password"}
                id="outlined-start-adornment"
                className={classes.textField}
                placeholder="Nhập mật khẩu"
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                    <LockOpenIcon />
                  </InputAdornment>,
                  endAdornment: <InputAdornment position="start">
                    {
                      clearPassword ? (
                        <VisibilityIcon onClick={() => setClearPassword(false)} />
                      ) : (
                        <VisibilityOffIcon onClick={() => setClearPassword(true)} />
                      )
                    }
                  </InputAdornment>,
                }}

                variant="outlined"
              />
            </div>

            <div className={classes.inputContainer}>
              <Typography className={classes.inputName}> Xác nhận mật khẩu </Typography>
              <TextField
                size="small"
                type={clearPassword ? "text" : "password"}
                id="outlined-start-adornment"
                className={classes.textField}
                placeholder="Nhập lại mật khẩu"
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                    <LockOpenIcon />
                  </InputAdornment>,
                  endAdornment: <InputAdornment position="start">
                    {
                      clearPassword ? (
                        <VisibilityIcon onClick={() => setClearPassword(false)} />
                      ) : (
                        <VisibilityOffIcon onClick={() => setClearPassword(true)} />
                      )
                    }
                  </InputAdornment>,
                }}

                variant="outlined"
              />
            </div>

            <div className={classes.inputContainer}>
              <Button className={classes.loginBtn} onClick={handleNext}>
                Đăng kí
              </Button>
            </div>

            <div className={classes.inputContainer}>
              {/* <Typography className={classes.optionTitle}>Or Sign Up Using</Typography> */}
              <div className={classes.socialButtonContainer}>
                <Button 
                  className={classes.signupBtn}
                  onClick={()=>handleNavigate("/login")}
                >
                  Đi đến trang đăng nhập
                </Button>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <div className={classes.circle}>
                  <img src={messIcon} alt="" className={classes.messIcon} />
                </div>
              </Grid>
              <Grid item container direction="column" alignItems="center">
                <Typography className={classes.verifyNotify}>
                  Enter the verification code we send to
                </Typography>
                <Typography className={classes.verifyEmail}>thuyduong@gmail.com</Typography>
              </Grid>
              <Grid item style={{ margin: '20px 0px 10px 0px' }}>
                <TextField
                  size="small"
                  id="outlined-start-adornment"
                  className={classes.textField}
                  placeholder="Verification code"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><VerifiedUserIcon /></InputAdornment>,
                  }}
                  variant="outlined"
                />
              </Grid>
              <div className={classes.inputContainer}>
                <Button className={classes.loginBtn} onClick={handleNext}>
                  Verify
                </Button>
              </div>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <div className={classes.circleSuccess}>
                  <div className={classes.circleSuccessInner}>
                    <CheckIcon style={{ fontSize: '30px', fontWeight: '800', color: 'white' }} />
                  </div>
                </div>
              </Grid>
              <Grid item container direction="column" alignItems="center">
                <Typography className={classes.verifySuccess}>
                  You are verified!
                </Typography>
                <Typography className={classes.verifyNotify} style={{ marginBottom: '20px' }}>
                  We have confirm your account. Please loign
                </Typography>
              </Grid>
              <div className={classes.inputContainer}>
                <Button
                  className={classes.loginBtn}
                  onClick={()=>handleNavigate("/login")}
                >
                  Login
                </Button>
              </div>
            </Grid>
          </>
        )
      default:
        return '';
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.backButton}
        >
          Back
        </Button>
        <Typography className={classes.title}> Đăng kí </Typography>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel connector={<Connector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <React.Fragment
                  className={classes.instructions}
                >
                  {GetStepContent(activeStep)}
                </React.Fragment>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
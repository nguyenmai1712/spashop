import { Button, CircularProgress, Grid, InputAdornment, makeStyles, Slide, Snackbar, TextField, Typography } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import CheckIcon from '@material-ui/icons/Check';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Alert } from '@material-ui/lab';
import messIcon from 'assets/icons/MessageIcon.png';
import background from 'assets/images/loginbg.jpg';
import StepIcon, { Connector } from 'components/StepIcon';
import { OK } from 'constant';
import useInput from 'hooks/input.hooks';
import React from 'react';
import { useHistory } from 'react-router-dom';
import authenticationService from 'Services/authenticationService';
import { ValidateFunc } from 'Utils/ValidateFunc'

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
    color: '#fb6f92',
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
    minHeight: 50,
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
    textAlign: "center"
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
    backgroundColor: '#fb6f92',
    color: 'white',
    borderRadius: 30,
    top: 10,
    left: 10,
    zIndex: 9999,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#fb6f92',
    },
    '&.Mui-disabled': {
      backgroundColor: '#ddd',
      color: '#686868',
    }
  },

  loading: {
    color: 'white',
  }
}));

function getSteps() {
  return ['Tài khoản', 'Xác thực', 'Hoàn thành'];
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const steps = getSteps();
  const [clearPassword, setClearPassword] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [showError, setShowError] = React.useState(false);
  const [isFetching, setFetching] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const {value: email, onChange: onChangeEmail} = useInput('');
  const {value: password, onChange: onChangePassword} = useInput('');
  const {value: repassword, onChange: onChangeRepassword} = useInput('');
  const {value: name, onChange: onChangeName} = useInput('');
  const {value: verifyCode, onChange: onChangeVerifyCode} = useInput("");

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

  const handleSignUp = async() => {
    if (
      name &&
      ValidateFunc.email(email) &&
      ValidateFunc.password(password) &&
      password === repassword
    ) {
      const user = {
        name,
        email,
        password
      }
      try {
        setFetching(true)
        const {data, status} = await authenticationService.register(user);
        if (data && status === OK) {
          console.log(data)
          setFetching(false);
          const user = {
            token: data.user.tokens[0].token,
            email: data.user.email,
            role: data.user.role,
          }
          authenticationService.updateUser(user);
          handleNext();
        }
      } catch (error) {
        setFetching(false);
        setShowError(true);
        setErrorMsg(error.message);
      }
    } else {
      setShowError(true);
      setErrorMsg("Vui lòng nhập đầy đủ các thông tin");
    }
  }

  const handleVerifyEmail = async() => {
    if (
      verifyCode &&
      ValidateFunc.minLength(verifyCode, 6)
    ){
      try{
        setFetching(true);
        console.log("vào day không")
        const {status} = await authenticationService.verifyCode(verifyCode);
        if (status === OK) {
          handleNext();
        } else {
          setFetching(false)
        }
      } catch (error) {
        setFetching(false)
      }
    } else {
      setShowError(true);
      setErrorMsg("Mã xác thực không đúng");
    }
  }

  function GetStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <React.Fragment>
            <div className={classes.inputContainer}>
              <Typography className={classes.inputName}> Tên người dùng </Typography>
              <TextField
                size="small"
                id="outlined-start-adornment"
                className={classes.textField}
                placeholder="Nhập tên người dùng"
                value={name}
                onChange={onChangeName}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>,
                }}
                variant="outlined"
              />
            </div>

            <div className={classes.inputContainer}>
              <Typography className={classes.inputName}> Email </Typography>
              <TextField
                size="small"
                id="outlined-start-adornment"
                className={classes.textField}
                placeholder="Nhập tài khoản đăng kí"
                value={email}
                onChange={onChangeEmail}
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
                value={password}
                onChange={onChangePassword}
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
                value={repassword}
                onChange={onChangeRepassword}
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
              {
                isFetching ? (
                  <Button className={classes.loginBtn}>
                    <CircularProgress className={classes.loading} size={24}/>
                  </Button>
                ) : (
                  <Button className={classes.loginBtn} onClick={handleSignUp}>
                    Đăng kí
                  </Button>
                )
              }
              
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
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
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
                  Nhập mã xác thực chúng tôi đã gửi tới:
                </Typography>
                <Typography className={classes.verifyEmail}> {email} </Typography>
              </Grid>
              <Grid item style={{ margin: '20px 0px 10px 0px' }}>
                <TextField
                  size="small"
                  id="outlined-start-adornment"
                  className={classes.textField}
                  placeholder="Mã xác thực"
                  value={verifyCode}
                  onChange={onChangeVerifyCode}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><VerifiedUserIcon style={{color: '#007dff'}}/></InputAdornment>,
                  }}
                  variant="outlined"
                />
              </Grid>
              <div className={classes.inputContainer}>
                {
                  isFetching ? (
                    <Button className={classes.loginBtn}>
                      <CircularProgress className={classes.loading} size={24}/>
                    </Button>
                  ) : (
                    <Button className={classes.loginBtn} onClick={handleVerifyEmail}>
                      Xác thực
                    </Button>
                  )
                }
                
              </div>
            </Grid>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
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
                  Xác thực thành công
                </Typography>
                <Typography className={classes.verifyNotify} style={{ marginBottom: '20px' }}>
                  Tiến hành đăng nhập
                </Typography>
              </Grid>
              <div className={classes.inputContainer}>
                <Button
                  className={classes.loginBtn}
                  onClick={()=>handleNavigate("/login")}
                >
                  Đăng nhập
                </Button>
              </div>
            </Grid>
          </React.Fragment>
        )
      default:
        return '';
    }
  }
  return (
    <div className={classes.container}>
      <Snackbar
        open={showError}
        onClose={() => setShowError(false)}
        TransitionComponent={TransitionDown}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      > 
        <Alert severity="error">{errorMsg}</Alert>
      </Snackbar>
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
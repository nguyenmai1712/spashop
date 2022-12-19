import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  makeStyles,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import facebookIcon from 'assets/icons/facebook.png';
import googleIcon from 'assets/icons/google.png';
import twitterIcon from 'assets/icons/twitter.png';
import background from 'assets/images/loginbg.jpg';
import useInput from 'hooks/input.hooks';
import React from 'react';
import { ValidateFunc } from 'Utils/ValidateFunc';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import authenticationService from 'Services/authenticationService';
import { OK, roles, USER_LOCAL_STORE } from 'constant';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    // [theme.breakpoints.down("xs")]: {
    //   height: '100%',
    // },
    backgroundImage: `url(${background})`,
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

    [theme.breakpoints.up('xl')]: {
      width: 500,
    },
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    // boxShadow: '0px 0px 15px -3px rgba(15, 23, 42, 0.5)',
    boxShadow: '0px 0px 15px -3px white',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    animation: `$effect 2000ms ${theme.transitions.easing.easeInOut}`,

  },

  backButton: {
    position: 'absolute',
    textTransform: 'none',
    backgroundColor: '#fb6f92',
    color: 'white',
    borderRadius: 30,
    top: 10,
    left: 10,
    zIndex: 1,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#fb6f92',
    },
    '&.Mui-disabled': {
      backgroundColor: '#ddd',
      color: '#686868',
    }
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
      borderColor: '#E2E8F0',
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

  remembermeContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formControlLabel: {
    '&>.MuiFormControlLabel-label': {
      color: '#686868',
      fontSize: 15,
      letterSpacing: 0.5,
    }
  },
  forgotPassword: {
    // marginTop: 5,
    color: '#0096C7',
    fontSize: 13,
    fontStyle: 'italic',
    '&:hover': {
      cursor: 'pointer',
      color: '#0079a1',
    },
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

  loading: {
    color: 'white',
  }

}));


function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [ clearPassword, setClearPassword ] = React.useState(false);
  const [ isFetching, setFetching ] = React.useState(false);
  const [ error, setError ] = React.useState("");
  const [ showError, setShowError] = React.useState(false);
  const { value: password, onChange: handleChangePassword } = useInput("") ;
  const { value: email, onChange: handleChangeEmail } = useInput("");

  const handleNavigate = (link) => {
    history.push(link);
  };

  const handleLogin = async() => {
    if (
      ValidateFunc.email(email) &&
      ValidateFunc.password(password)
    ) {
      const user = {
        email,
        password
      };

      try {
        setFetching(true);
        const {data, status} = await authenticationService.login(user);
        if (data && status === OK) {
          setFetching(false);
          const user = {
            token: data.token,
            email: data.user.email,
            role: data.user.role,
            name: data.user.name,
          }
          authenticationService.updateUser(user);

          if (data.user.role === roles.admin && data.user.isVerify) {
            handleNavigate("/admin");
          } else {
            handleNavigate("/home");
          }
        }
      } catch(error) {
        setFetching(false)
      }     
    } else {
      setError("Email hoặc mật khẩu không đúng! ");
      setShowError(true);
    }
  }

  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORE));
    if (user && user.token) {
      user.role === roles.admin ? handleNavigate("/admin") : handleNavigate("/home");
    }
  }

  React.useEffect(() => {
    checkLogin();
  },[])

  return (
    <div className={classes.container}>
      <Snackbar
        open={showError}
        onClose={() => setShowError(false)}
        TransitionComponent={TransitionDown}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      > 
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <div className={classes.loginContainer}>
        <Button
          className={classes.backButton}
          onClick={() => handleNavigate("/home")}
        >
          Trang chủ
        </Button>
        <Typography className={classes.title}> Đăng nhập </Typography>
        <div className={classes.inputContainer}>
          <Typography className={classes.inputName}> Email </Typography>
          <TextField
            size="small"
            id="outlined-start-adornment"
            className={classes.textField}
            placeholder="Nhập tài khoản"
            value={email}
            onChange={handleChangeEmail}
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
            value={password}
            onChange={handleChangePassword}
            placeholder="Nhập mật khẩu"
            InputProps={{
              startAdornment: <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>,
              endAdornment: <InputAdornment style={{cursor: 'pointer'}} position="start">
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

        <div className={classes.remembermeContainer}>
          <Typography className={classes.forgotPassword}> Quên mật khẩu?</Typography>
        </div>

        <div className={classes.inputContainer}>
          {
            !isFetching ? (
              <Button
                className={classes.loginBtn}
                onClick={handleLogin}
              >
                Đăng nhập
              </Button>
            ) : (
              <Button
                className={classes.loginBtn}
              >
                <CircularProgress className={classes.loading} size={24}/>
              </Button>
            )
          }
          
          
        </div>

        <div className={classes.inputContainer}>
          <Typography className={classes.optionTitle}>Đăng nhập bằng</Typography>
          <div className={classes.socialButtonContainer}>
            <IconButton>
              <Avatar src={facebookIcon} />
            </IconButton>
            <IconButton>
              <Avatar src={twitterIcon} />
            </IconButton>
            <IconButton>
              <Avatar src={googleIcon} />
            </IconButton>
          </div>
        </div>

        <div className={classes.inputContainer}>
          {/* <Typography className={classes.optionTitle}>Or Sign Up Using</Typography> */}
          <div className={classes.socialButtonContainer}>
            <Button className={classes.signupBtn} onClick={() => handleNavigate("/signup")}>
              Đăng kí
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
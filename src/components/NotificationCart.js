import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useDispatch } from 'react-redux';
import { notifyCart } from 'redux/cart/actions';


function NotificationCart({ isNotify }) {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = React.useState(isNotify);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(notifyCart(false));
  };

  React.useEffect(() => {
    setOpenSnackbar(isNotify)
  }, [isNotify])
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success">Added product to cart successfully!</Alert>
      </Snackbar>
    </div>
  )
}

export default NotificationCart;
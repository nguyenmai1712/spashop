import React from 'react';
import { Drawer, IconButton, makeStyles, Typography, Button, Badge } from '@material-ui/core';
import ShopIcon from '@material-ui/icons/Shop';
import CloseIcon from '@material-ui/icons/Close';
import CartItem from 'components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenSelector, productCarts } from 'redux/cart/selector';
import ToCurrency from 'Utils/FormatNumber';
import { useWindowSize } from 'hooks/input.hooks';
import { toggleCart } from 'redux/cart/actions';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  drawer: {
    zIndex: 999999,
  },

  cart: {
    position: 'fixed',
    boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    background: 'white',
    borderRadius: 10,
    transition: 'all ease-in-out .6s',
  },

  hideCartBtn: {
    transform: 'translateX(300px)'
  },

  cartBtn: {

  },

  icon: {
    fontSize: 32,
    color: '#f4a51c'
  },

  customBadge: {
    background: 'black',
    color: 'white',
  },

  shoppingCart: {
    width: '450px',
    [theme.breakpoints.down("xs")]: {
      width: (props) => props.width,
    },
    height: '100%',
    backgroundColor: '#f3f3f3',
    boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.5)',
  },

  shopingCartHeader: {
    background: 'white',
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  closeButon: {
    position: 'absolute',
    top: 5,
    left: 10,
    color: '#686868',
    fontSize: 32,
    fontWeight: 600,
  },

  textHeader: {
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: 600,
  },

  cartBody: {
    padding: 10,
    height: 'calc(100% - 260px)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 3,
    },

    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#f4a51c',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#df971a',
    },

  },

  cartFooter: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  paymentTitle: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: 'solid 1px #ddd',
    '&>p': {
      color: '#686868',
      fontSize: 18,
      fontFamily: 'Lato',
    },
  },

  subTotal: {
    display: 'flex',
    padding: 20,
    background: 'white',
    justifyContent: 'space-between',
  },

  textSubTitle: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 600,
  },

  buttonContainer: {
    display: 'flex',
    background: 'white',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonView: {
    width: '49%',
    height: 45,
    color: 'black'
  },

  buttonChecked: {
    width: '49%',
    height: 45,
    background: 'black',
    color: 'white',
    '&:hover': {
      background: '#282828',
    },
  },

  emptyCart: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  emptyTitle: {
    fontFamily: 'Lato',
    color: '#686868',
    fontStyle: 'Italic',
    fontSize: 18,
  },

  backBtn: {
    marginTop: 20,
    height: 45,
    background: 'black',
    color: 'white',
    fontWeight: 600,
    '&:hover': {
      background: '#282828',
    },
  }

}));

function CartDrawer({ screenHeight }) {

  const isCartOpen = useSelector(isOpenSelector);
  const dispatch = useDispatch();

  const [width] = useWindowSize();
  const classes = useStyles({width});
  const [isOpen, setOpen] = React.useState(isCartOpen);


  const cart = useSelector(productCarts);

  const subTotal = cart.reduce((total, currentValue) => {
    return total + currentValue.totalPrice;
  },0 )

  const handleToggleDrawer = (value) => {
    dispatch(toggleCart(value));
  };

  React.useEffect(() => {
    setOpen(isCartOpen);
  }, [isCartOpen])

  return (
    <>
      {
        !isOpen && (
          <div className={clsx(classes.cart,{
            [classes.hideCartBtn]: screenHeight > 300, 
          })}>
            <IconButton className={classes.cartBtn} onClick={() => handleToggleDrawer(true)}>
              <Badge 
                badgeContent={cart.length}
                color="error"
                overlap="rectangular"
                classes={{ badge: classes.customBadge }}
              >
                <ShopIcon className={classes.icon} />
              </Badge>
            </IconButton>
          </div>
        )
      }

      <Drawer anchor="right" open={isOpen} onClose={() => handleToggleDrawer(false)} className={classes.drawer}>
        <div className={classes.shoppingCart}>
          <div className={classes.shopingCartHeader}>
            <ShopIcon className={classes.icon} />
            <Typography className={classes.textHeader}>Cart</Typography>
            <IconButton className={classes.closeButon} onClick={() => handleToggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          {
            (cart.length > 0) ? (
              <>
                <div className={classes.cartBody}>
                  {
                    cart.map(item => <CartItem data={item} key={item.id} />)
                  }

                </div>
                <div className={classes.cartFooter}>
                  <div className={classes.paymentTitle}>
                    <Typography>Payments Details</Typography>
                  </div>
                  <div className={classes.subTotal}>
                    <Typography className={classes.textSubTitle}> Sub Total</Typography>
                    <Typography className={classes.textSubTitle}>${ToCurrency(subTotal)}</Typography>
                  </div>
                  <div className={classes.buttonContainer}>
                    <Button className={classes.buttonView} variant="outlined">View cart</Button>
                    <Button className={classes.buttonChecked}>Checkout</Button>
                  </div>
                </div>
              </>
            ) : (
              <div className={classes.emptyCart}>
                <Typography className={classes.emptyTitle}> Your cart is empty!</Typography>
                <Button className={classes.backBtn}> Back to shop </Button>
              </div>
            )
          }
        </div>
      </Drawer>
    </>
  )
}

export default CartDrawer;
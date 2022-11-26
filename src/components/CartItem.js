import React from 'react';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import TrashIcon from 'assets/icons/TrashIcon.png';
import { useDispatch } from 'react-redux';
import { deleteProductCart, updateProductCart } from 'redux/cart/actions'
import ToCurrency from 'Utils/FormatNumber';

const useStyles = makeStyles(() => ({
  container: {
    background: 'white',
    padding: 10,
    boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.1)',
    marginBottom: 10,
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  productImg: {
    height: 80,
    width: 80,
  },

  productName: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Lato',
  },

  total: {
    padding: '10px 10px 0px',
    borderTop: 'solid 1px #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    '&>input': {
      width: 60,
      fontSize: 14,
      padding: 5,
      border: 'solid 1px #ddd',
      borderRadius: 4,
    }
  },

  quantity: {
    fontSize: 16,
    color: '#686868',
    fontFamily: 'Lato',
  },

  removeBtn: {
    '&:hover': {
      background: 'rgba(246, 104, 128, 0.1)',
    },
    height: 50,
    width: 50,
  },

  price: {
    fontFamily: 'Lato',
    fontWeight: 600,
    fontSize: 16,
  },

}));

function CartItem({ data }) {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(data.quantity);
  const dispatch = useDispatch();

  const handleChangeQuality = (event) => {
    if (event.target.value > 0){
      setQuantity(event.target.value);

    } else {
      setQuantity(0);
    }
  };

  React.useEffect(() => {
    const dataUpdate = {
      ...data,
      quantity,
      totalPrice: quantity*data.newPrice,
    };

    console.log({dataUpdate})
    dispatch(updateProductCart(dataUpdate))
  }, [dispatch, quantity]);

  const handleRemoveItem = () => {
    dispatch(deleteProductCart(data.id));
  };
  
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Avatar src={data.mainImage} variant="square" className={classes.productImg} />
        <Typography className={classes.productName}>
          {data.name}
        </Typography>
        <IconButton
          className={classes.removeBtn}
          onClick={handleRemoveItem}
        >
          <Avatar src={TrashIcon} style={{ width: 20, height: 20 }}/>
        </IconButton>
      </div>
      <div className={classes.total}>
        <div className={classes.quantityContainer}>
          <Typography className={classes.quantity}>Quantity &nbsp;</Typography>
          <input type="number" onChange={handleChangeQuality} value={quantity === 0 ? "": quantity}/>
        </div>          
        <div>
          <Typography className={classes.price}>{ToCurrency(data.totalPrice)}đ</Typography>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    height: 40,
  },

  button: {
    minWidth: 40,
    border: 'solid 1px #686868',
    borderRadius: 0,
    fontSize: 20,
    fontFamily: 'Lato',
    color: '#686868',
    padding: 0,
  },

  input: {
    borderTop: 'solid 1px #686868',
    borderBottom: 'solid 1px #686868',
    width: 50,
    textAlign: 'center',
    padding: 0,
    outline: 'none',
    border: 'none',
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#686868'
  }
}))

function QuantityComponent({ onChangeValue }) {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrease = () => {
    setQuantity((prevValue) => {
      if (prevValue > 1) {
        return --prevValue
      } else {
        return 1;
      }
    })
  };

  const handleIncrease = () => {
    setQuantity(prevValue => ++prevValue)
  };

  React.useEffect(() => {
    onChangeValue(quantity)
  }, [onChangeValue, quantity]);

  return (
    <div className={classes.container}>
      <Button className={classes.button} onClick={handleDecrease}>-</Button>
      <input
        value={quantity}
        readOnly
        className={classes.input}
        variant="outlined"
      />
      <Button className={classes.button} onClick={handleIncrease}>+</Button>
    </div>
  )
}

export default React.memo(QuantityComponent);
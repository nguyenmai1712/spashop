import React from 'react';
import {
  Button, Grid, makeStyles, MenuItem, Select, Typography
} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useInput } from 'hooks/input.hooks';


import BreadcrumbCustom from './BreadcrumbCustom';

const useStyles = makeStyles((theme) => ({
  container: {

  },

  headerTitle: {
    fontSize: 20,
    fontFamily: 'Lato',
    fontWeight: 600,
    letterSpacing: 2,
  },

  button: {
    background: 'white',
    color: '#686868',
    border: 'solid 1px #E2E8F0',
    // boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    boxShadow: 'none',
    minWidth: 0,
    marginRight: 20,
    '&:hover': {
      background: '#f4a52ce3',
      color: 'white',
    }
  },

  active: {
    background: '#f4a52ce3',
    color: 'white',
  },

  productInfo: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868'
  },

  fieldSelect: {
    height: 40,
    width: '200px',
    [theme.breakpoints.down("sm")]: {
      width: 180,
    },
    background: 'white',
    color: '#686868',
    fontFamily: 'Lato',
    fontSize: 14,
    '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
    '& .MuiOutlinedInput-input': {
      padding: '9px 10px',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
  },

  buttonContainer: {
    display: 'flex',
    marginTop: 10,
    rowGap: 10,
    justifyContent: 'space-between'
  },

}));

function ShoppageHeader({ onHorizontal, amountOfProduct, breadcrumbsList, title }) {
  const classes = useStyles();
  const { value: sortByValue, onChange: setSortBy } = useInput("default");
  const [isHorizontal, setHorizontal] = React.useState(false);
  
  const handleSetHorizontal = (value) => {
    setHorizontal(value);
    onHorizontal(value)
  }

  return (
    <div className={classes.container}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        style={{
          marginBottom: 10,
        }}
      >
        <Grid item className={classes.headerTitle}>{title}</Grid>
        <Grid item className={classes.breadCumbs}>
          <BreadcrumbCustom breadcrumbsList={breadcrumbsList} />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        style={{
          marginBottom: 20,
        }}
      >
        <Grid item>
          <Typography className={classes.productInfo}>Showing 1-16 of {amountOfProduct} results</Typography>
        </Grid>
        <Grid item
          className={classes.buttonContainer}
        >
          {
            onHorizontal && (
              <>
                <Button
                  onClick={() => handleSetHorizontal(false)}
                  variant="contained"
                  className={clsx(classes.button, {
                    [classes.active]: !isHorizontal,
                  })}
                >
                  <AppsIcon />
                </Button>

                <Button
                  onClick={() => handleSetHorizontal(true)}
                  variant="contained"
                  className={clsx(classes.button, {
                    [classes.active]: isHorizontal,
                  })}
                >
                  <MenuIcon />
                </Button>
              </>
            )
          }
          

          <Select
            value={sortByValue}
            onChange={setSortBy}
            displayEmpty
            size="small"
            className={classes.fieldSelect}
            variant="outlined"
          >
            <MenuItem value="default">Default sorting</MenuItem>
            <MenuItem value="popularity">Sort by popularity</MenuItem>
            <MenuItem value="rating">Sort by average rating</MenuItem>
            <MenuItem value="lasted">Sort by lasted</MenuItem>
            <MenuItem value="priceLow">Sort by price: Low To High</MenuItem>
            <MenuItem value="priceHigh">Sort by price: High to Low</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </div>
  )
}

export default ShoppageHeader;
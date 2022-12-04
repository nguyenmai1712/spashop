import React from 'react';
import { Button, Dialog, makeStyles, Typography } from '@material-ui/core';
import productImage from 'assets/images/home_beauty_salon_shop_11.jpg'
import ToCurrency from 'Utils/FormatNumber';
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        padding: 10,
        display: 'flex',
        columnGap: 10,
        background: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
        borderRadius: 10,
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.08)',
            backgroundColor: '#c1e7ec',
        },
    },

    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },

    productName: {
        fontSize: 18,
        color: '#05b5cb',
        fontWeight: 500
    },

    productPrice: {
        fontSize: 16,
        color: '#686868',
        fontWeight: 500,
    },

    amount: {
        fontSize: 14,
        color: '#686868',
        fontWeight: 400,
    },

    selectImageDialog: {
        width: 400,
    },

}));

function ProductOrderItem({data, onSelect}) {
    const classes = useStyles();

    const handleSelectProduct = () => {
        onSelect(data)
    }

    return (
        <div className={classes.container} onClick={() => handleSelectProduct()}>
            <img className={classes.productImage} src={productImage} alt=""/>
            <div>
                <Typography className={classes.productName}> {data.name} </Typography>
                <Typography className={classes.productPrice}> {ToCurrency(data.newPrice)}đ</Typography>
                <Typography className={classes.amount}> số lượng: {data.amount} </Typography>
            </div>
        </div>
    );
}

export default ProductOrderItem;
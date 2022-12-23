import React from 'react';
import { Button, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link, useLocation } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import logo from 'assets/icons/spa_logo.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ToCurrency from 'Utils/FormatNumber';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
    
    header: {
        position: 'fixed',
        width: '100%',
        background: '#fb6f92',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    navbar: {
        width: '80%',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& a': {
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
                opacity: 0.7
            }
        }
    },

    headerTitle: {
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'center', 
        background: 'white',
        boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.08)',
        color: '#fb6f92',
        paddingLeft: '10%',
        paddingRight: '10%',
        '&>img': {
            width: 70,
            height: 70,
        },

        '&>.title': {
            marginLeft: 20,
            fontSize: 32,
            letterSpacing: -1,
        }
    },

    navItem: {
        display: 'flex', 
        columnGap: 20, 
    },

    menuItem: {
        display: 'flex',
        alignItems: 'center',
        columnGap: 5,
    },
    
    maincontent: {
        paddingTop: "150px",
        width: '80%',
        height: '100%',
        background: '#fbfbfbdd',
    },

    breakline: {
        height: 3,
        width: '100%',
        backgroundPositionX: '-30px',
        backgroundSize: '116px 3px',
        backgroundImage: 'repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6 33px,transparent 0,transparent 41px,#f18d9b 0,#f18d9b 74px,transparent 0,transparent 82px);'
    },

    addressContainer: {
        padding: 16,
        background: 'white',
    },

    addressTitle: {
        marginBottom: 10,
        color: "#fb6f92",
        fontSize: 18,
        display: 'flex',
        alignItems: 'center'
    },

    addressContent: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    phoneNumber: {
        fontWeight: 500,
    },

    street: {
        color: '#686868',
    },

    productList: {
        marginTop: 10,
        padding: 16,
        background: 'white',
    },

    productTable: {
        width: '100%',
        '&>.row-header': {
            height: 100,
            borderBottom: 'solid 1px #dddd',
            '&>th': {
                textAlign: 'left',
            }
        },

        '&>row-content': {
            minHeight: 50,
        },
    },

    totalPayment: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',   
        background: '#fafdff',
        padding: 55,
        columnGap: 10,
    },
}))

function CheckoutCard ({ image, title}) {
    const styles = {
        styleImage: {
            width: 50,
            height: 50,
            objectFit: 'cover',
        },
        styleContainerCard: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 10,
        },
        styleTitle: {
            fontSize: 18,
            color: '#686868'
        }
    };
    
    return (
        <div style={styles.styleContainerCard}>
            <img style={styles.styleImage} src={image} alt=""/>
            <Typography style={styles.styleTitle}>{title}</Typography>
        </div>
    )
}

function CheckoutPage(props) {
    const classes = useStyles();
    const location = useLocation();
    const { data: shoppingCartData } = location.state;

    const handleReturnTotal = () => {
        const total = shoppingCartData.reduce((total, currentValue) => {
            return total + currentValue.totalPrice;
        },0 );
        return total;
    }
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.navbar}>
                    <div className={classes.navItem}>
                            <Link href="#">
                                <div className={classes.menuItem}>
                                    <span>kết nối</span>
                                    <FacebookIcon />
                                </div>
                            </Link>
                    </div>
                    <div className={classes.navItem}>
                            <Link href="#">
                                <div className={classes.menuItem}>
                                    <NotificationsIcon />
                                    <span>Thông báo</span>
                                </div>
                            </Link>
                            <Link href="#">
                                <div className={classes.menuItem}>
                                    <HelpIcon />
                                    <span> Hỗ trợ </span>
                                </div>
                            </Link>
                            <Link href="#">
                                <div className={classes.menuItem}>
                                    <AccountCircleIcon />
                                    <span> Mai Mai </span>
                                </div>
                            </Link>
                    </div>
                </div>
                <div className={classes.headerTitle}>
                    <img src={logo} alt=""/>
                    <Typography className='title'> Smile Spa | Thanh Toán </Typography>
                </div>
            </div>
            <div className={classes.maincontent}>
                <div className={classes.breakline}></div>
                <div className={classes.addressContainer}>
                    <div className={classes.addressTitle}>
                        <LocationOnIcon />
                        <span> Địa chỉ nhận hàng </span>
                    </div>
                    <div className={classes.addressContent}>
                        <div>
                            <span className={classes.phoneNumber}> Mai Mai (+84 37 393 2917)</span>
                            <span className={classes.street}> 9 Trần Đại Nghĩa, Phường Hai Bà Trưng, Thành Phố Hà Nội </span>
                        </div>
                        <Button variant="contained" color="secondary"> Thay đổi </Button>
                    </div>
                </div>

                <div className={classes.productList}>
                    <table className={classes.productTable}>
                        <tr className="row-header">
                            <th>Sản phẩm</th>
                            <th>Loại</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                            {
                                shoppingCartData.map(item => (
                                    <tr className="row-content">
                                        <td>
                                            <CheckoutCard image={item.mainImage} title={item.name}/>
                                        </td>
                                        <td>{item.color.join(",")}</td>
                                        <td>{ToCurrency(item.newPrice)+"đ"}</td>
                                        <td align='center'>{item.quantity}</td>
                                        <td>{ToCurrency(item.quantity * item.newPrice)+"đ"}</td>
                                    </tr>
                                ))
                            }
                    </table>
                </div>
                <div className={classes.breakline}></div>
                <div className={classes.totalPayment}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Typography className={classes.totalPaymentTitle}> {`Tổng số tiền (${shoppingCartData.length} sản phẩm):`}</Typography>
                        <span style={{fontSize: 32, color: '#fb6f92'}}> {`${ToCurrency(handleReturnTotal())}đ`}</span>
                    </div>
                    <Button variant='outlined' color='secondary'>Mua Hàng </Button>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
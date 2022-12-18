import {
    AppBar,
    Button,
    CircularProgress,
    Dialog,
    makeStyles,
    MenuItem,
    Select,
    Slide,
    Snackbar,
    Tab,
    Tabs,
    TextField,
    Typography,
    useTheme,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { CREATED, OK } from 'constant';
import useInput from 'hooks/input.hooks';
import { storeData } from 'pages/FakeData';
import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { orderService } from 'Services/orderServices';
import { productService } from 'Services/productService';
import { treatementService } from 'Services/treatmentService';
import ToCurrency from 'Utils/FormatNumber';

import AppoinentForm from '../Calendar/AppoinentForm';
import MiniTable from '../Components/MiniTable';
import ProductOrderItem from './ProductOrderItem';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: 'calc(100vh - 90px)',
        background: 'white',
        boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.08)',
        borderRadius: 10,
        overflow: 'scroll',
    },

    header: {
        padding: '16px 100px',
        color: 'blue',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerTitle: {
        color: '#05b5cb',
        fontSize: 24,
    },

    formContainer: {
        display: 'flex',
        padding: '0px 100px',
        columnGap: 16,
        width: '100%',
        height: 'calc(100vh - 150px)',
    },

    formContent: {
        width: '50%',
    },

    formGroup: {
        marginBottom: 20,
    },

    inputfield: {
        width: '100%'
    },

    inputLabel: {
        fontSize: 16,
        color: '#686868',
        fontWeight: 500,
    },

    fieldSelect: {
        height: 40,
        width: "100%",
        background: 'white',
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

    productList: {
        width: '100%',
        padding: 10,
        height: 'calc(100vh - 350px)',
        rowGap: 10,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },

    buttonGroup: {
        display: 'flex',
        columnGap: 10,
        justifyContent: 'flex-end',
        padding: 10,
    },

    button: {
        minWidth: 100,
    },

    headerDialog: {
        width: '100%',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        borderBottom: 'solid 1px #ddd'
    },

    titleDialog: {
        fontSize: 20,
        fontWeight: 500,
    },

    inforItem: {
        padding: 10,
        display: 'flex',
    },

    inforName: {
        minWidth: 150,
        color: '#05b5cb'
    },

    inforValue: {
        '& input': {
            height: 30
        }
    },

    appbar: {
        background: 'white',
        boxShadow: 'none'
    },


    dialog: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '100% !important',
        },
    },

}));

const productColumns = [
    { id: 'name', label: 'Tên sản phẩm', minWidth: 170 },
    {
        id: 'sellAmount',
        label: 'Số lượng',
        minWidth: 170,
        align: 'right',
    },
    { id: 'price', label: 'Giá bán', minWidth: 100 },
];

const treatmentColumns = [
    { id: 'name', label: 'Tên liệu trình', minWidth: 170 },
    {
        id: 'sellAmount',
        label: 'Số lượng',
        minWidth: 170,
        align: 'right',
        format: (data) => `${ToCurrency(data)}đ`, 
    },
    { id: 'totalPrice', label: 'Giá bán', minWidth: 100 },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    <Typography>{children}</Typography>
                </div>
            )}
        </div>
    );
}

const orderStatus = {
    paid: "Đã thanh toán",
    unpaid: "Chưa thanh toán",
}

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}
  

function AddOrder(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [isOpenDialog, setOpenDialog] = React.useState(false);
    const [isOpenApointmentDialog, setOpenAppointmentDialog] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [ products, setProducts ] = React.useState();
    const [ treatments, setTreatments ] = React.useState([]);
    const [ selectedTreatment, setSelectedTreament ] = React.useState();
    const [ selectedProduct, setSelectedProduct ] = React.useState();
    const [ totalOrder, setTotalOrder ] = React.useState();
    const [ isFetching, setFetching ] = React.useState(false);
    const [ isAddFetching, setAddFetching ] = React.useState(false);
    const [ isPayFetching, setPayFetching ] = React.useState(false);
    const [ showError, setShowError] = React.useState(false);
    const [ errorMsg, setErrorMsg] = React.useState("");
    const [ treatmentDataTable, setTreatmentDataTable ] = React.useState([]);
    const [ productDataTable, setProductDataTable ] = React.useState([]);
    const { value: sellAmount, onChange: setSellAmount } = useInput(1);
    const { value: location, onChange: setLocation} = useInput("");
    const { value: customer, onChange: setCustomer} = useInput("");


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleSelectProduct = (data) => {
        setOpenDialog(true)
        setSelectedProduct(data)
    }

    const handleSelectAppointment = (data) => {
        setOpenAppointmentDialog(true)
        setSelectedTreament(data);
    }

    const handleAddTreatmentOrder = (data) => {
        setTreatmentDataTable([ ...treatmentDataTable, data]);
    }

    const handleAddProductOrder = () => {
        const productTable = {
            name: selectedProduct.name,
            sellAmount,
            price: selectedProduct.newPrice * sellAmount,
        }
        setProductDataTable([...productDataTable, productTable]);
        setOpenDialog(false);
    }

    const handleGetAllProduct = async () => {
		setFetching(true);
		try {
			const response = await productService.getProducts();
			if (response) {
				setProducts(response.data);
				setTimeout(()=>{
					setFetching(false);
				}, 1500)
			} 
		} catch (error) {
			setFetching(false);
			throw new Error();
		}
	}

    const handleGetTreatment = async () => {
        try {
            setFetching(true);
            const response = await treatementService.getTreatments();
            if ( response && response.status === OK) {
                setTreatments(response.data);
                setTimeout(() => {
                    setFetching(false);
                }, 1000);
            }
        } catch (error) {
            setFetching(false);
        }
    }

    const handleRemoveSelectedTreatment = (id) => {
        const newSelectedTreatment = treatmentDataTable.filter(item => item.id !== id)
        setTreatmentDataTable(newSelectedTreatment)
    }

    const handleRemoveSelectedProduct = (id) => {
        const newSelectedProduct = productDataTable.filter(item => item.id !== id)
        setProductDataTable(newSelectedProduct)
    }

    const handleGetTotalOrder = (productData, treatmentData) => {
        const totalProductPrice = productData.length > 0 ?  productData.reduce((total, item) => total + item.price, 0) : 0;
        const totalTreatmentPrice = treatmentData.length > 0 ? treatmentData.reduce((total, item) => total + item.totalPrice, 0) : 0;
        setTotalOrder(totalProductPrice + totalTreatmentPrice);
    }

    const handleAddOrder = async(status) => {
        if (
            location &&
            customer &&
            totalOrder > 0
        ) {
            const order = {
                location,
                customer,
                total: totalOrder,
                products: productDataTable,
                treatments: treatmentDataTable,
                status,
                time: (new Date()).toLocaleDateString(),
            }
            try {
                status === orderStatus.unpaid ?  setAddFetching(true) : setPayFetching(true);
                const response = await orderService.addOrder(order);
                if(response && response.status === CREATED) {
                    status === orderStatus.unpaid ?  setAddFetching(false) : setPayFetching(false);
                    history.push("/admin/order");
                }
                
            } catch (error) {
                setShowError(true);
                setErrorMsg(error.message);
                setAddFetching(true);
                setPayFetching(true);
            }
            
        } else {
            setShowError(true);
            setErrorMsg("Vui lòng nhập đầy đủ các thông tin")
        }
    }

    useEffect(() => {
        handleGetTreatment();
        handleGetAllProduct();
    }, []);

    useEffect(() => {
        handleGetTotalOrder(productDataTable, treatmentDataTable);
    }, [productDataTable, treatmentDataTable]);

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
            <div className={classes.header}>
                <Typography className={classes.headerTitle}> Tạo đơn hàng mới  </Typography>
                <div className={classes.buttonGroup}>
                    <Button
                        className={classes.button}
                        variant='contained'
                        onClick={() => history.push("/admin/order")}
                    >
                        Hủy
                    </Button>
                    {
                        isAddFetching ? (
                            <Button 
                                className={classes.button}
                                variant='contained'
                                color="primary"
                            >
                                <CircularProgress color='secondary' size={24}/>
                            </Button>
                        ) : (
                            <Button 
                                className={classes.button}
                                variant='contained'
                                color="primary"
                                onClick={() => handleAddOrder(orderStatus.unpaid)}
                            >
                                Hoàn thành
                            </Button>
                        )
                    }
                    {
                        isPayFetching ? (
                            <Button 
                                className={classes.button}
                                variant='contained'
                                color="primary"
                            >
                                <CircularProgress color='secondary' size={24}/>
                            </Button>
                        ) : (
                            <Button 
                                className={classes.button}
                                variant='contained'
                                color="primary"
                                onClick={() => handleAddOrder(orderStatus.paid)}
                            >
                                Thanh toán
                            </Button>
                        )
                    }
                </div>
            </div>

            <div className={classes.formContainer}>
                <div className={classes.formContent}>

                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Cửa hàng </Typography>
                        <Select
                            displayEmpty
                            size="small"
                            className={classes.fieldSelect}
                            variant="outlined"
                            value={location}
                            onChange={setLocation}
                        >
                            <MenuItem value={""}> Chọn cửa hàng </MenuItem>
                            {
                                storeData.map(item => (
                                    <MenuItem value={item}>{item}</MenuItem>
                                ))
                            }

                        </Select>
                    </div>

                    <div>
                        <AppBar position="static" className={classes.appbar}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="Sản phẩm" />
                                <Tab label="Liệu trình" />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className={classes.formGroup}>
                                    <div className={classes.productList}>
                                        {
                                            products && products.map(item => (
                                                <ProductOrderItem key={item.id} data={item} onSelect={(data) => handleSelectProduct(data)} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className={classes.formGroup}>
                                    <div className={classes.productList}>
                                        {
                                            treatments && treatments.map(item => (
                                                <ProductOrderItem key={item.id} data={item} onSelect={(data) => handleSelectAppointment(data)} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </div>

                </div>
                <div className={classes.formContent}>
                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Tên khách hàng hoặc số điện thoại </Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Tên khách hàng hoặc số điện thoại"
                            variant="outlined"
                            size='small'
                            value={customer}
                            onChange={setCustomer}
                        />
                    </div>
                    <div className={classes.formGroup} style={{ paddingBottom: 10 }}>
                        <MiniTable rows={productDataTable} columns={productColumns} hasDeleteBtn onDeleteItem={(id) => handleRemoveSelectedProduct(id)} />
                    </div>

                    <div className={classes.formGroup} style={{ paddingBottom: 10 }}>
                        <MiniTable rows={treatmentDataTable} columns={treatmentColumns} hasDeleteBtn onDeleteItem={(id) => handleRemoveSelectedTreatment(id)} />
                    </div>

                    <hr />
                    <div className={classes.formGroup} style={{ height: 70 }}>
                        <Typography className={classes.inputLabel}> Tổng tiền: {totalOrder && ToCurrency(totalOrder)} đ</Typography>
                    </div>

                </div>
            </div>

            <Dialog onClose={() => setOpenDialog(false)} aria-labelledby="customized-dialog-title" open={isOpenDialog}>
                <div className={classes.selectImageDialog}>
                    <div className={classes.headerDialog}>
                        <Typography className={classes.titleDialog}> Chọn sản phẩm </Typography>
                    </div>
                    <div className={classes.inforItem}>
                        <Typography className={classes.inforName}> Tên sản phẩm: </Typography>
                        <Typography className={classes.inforValue}>{ selectedProduct && selectedProduct.name }</Typography>
                    </div>

                    <div className={classes.inforItem}>
                        <Typography className={classes.inforName}> Giá bán: </Typography>
                        <Typography className={classes.inforValue}> {selectedProduct && ToCurrency(selectedProduct.newPrice)}đ</Typography>
                    </div>

                    <div className={classes.inforItem}>
                        <Typography className={classes.inforName}> Số lượng</Typography>
                        <Typography className={classes.inforValue}>
                            <input type="number" placeholder="Nhập số lượng" value={sellAmount} onChange={setSellAmount}/>
                        </Typography>
                    </div>

                    <div className={classes.buttonGroup}>
                        <Button variant="contained" onClick={() => setOpenDialog(false)}> Hủy </Button>
                        <Button variant="contained" color="secondary" onClick={() => handleAddProductOrder()}> Thêm  </Button>
                    </div>
                </div>
            </Dialog>

            <Dialog class={classes.dialog} onClose={() => setOpenAppointmentDialog(false)} open={isOpenApointmentDialog}>
                <AppoinentForm
                    serivceDefault={selectedTreatment}
                    onAddOrder={(data) => handleAddTreatmentOrder(data)}
                    onCloseModal={() => setOpenAppointmentDialog(false)}
                />
            </Dialog>
        </div>
    );
}

export default AddOrder;
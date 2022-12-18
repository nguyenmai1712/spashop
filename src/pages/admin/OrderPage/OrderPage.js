import { Button, makeStyles, MenuItem, Select, Slide, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LoadingComponent from 'components/LoadingComponent';
import { OK } from 'constant';
import useInput from 'hooks/input.hooks';
import { orderStatus } from 'pages/FakeData';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { appointmentService } from 'Services/appointmentService';
import { orderService } from 'Services/orderServices';
import ToCurrency from 'Utils/FormatNumber';
import DataTable from '../Components/DataTable';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: 'calc(100vh - 90px)',
    },

    header: {
        padding: 10,
        height: 70,
        width: "100%",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
    },

    tableContent: {
        marginTop: 30,
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    filterGroup: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        columnGap: 10,
    },

    inputfield: {
        width: '100%',
        '& .MuiInputBase-formControl': {
            background: 'white',
        },

        '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E2E8F0',
        },
    },

    fieldSelect: {
        height: 40,
        width: 200,
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

    buttonGroup: {
        padding: 10,
        display: 'flex',
        columnGap: 10,
        justifyContent: 'flex-end'
    },

    inforValue: {
        '& input': {
            height: 30
        }
    }
}));

const columns = [
    {
        id: 'id',
        label: 'Mã đơn hàng',
        minWidth: 100,
        align: "center",
    },

    {
        id: 'customer',
        label: 'Tên khách hàng',
        minWidth: 150,
        align: 'left',
    },
    {
        id: 'status',
        label: 'Trạng thái',
        minWidth: 150,
        align: 'center',
    },
    {
        id: 'time',
        label: 'Thời gian',
        minWidth: 150,
        align: 'center',
    },
    {
        id: 'total',
        label: 'Tổng tiền',
        minWidth: 70,
        align: 'left',
        format: (value) => ToCurrency(value)+'đ',
    },
]

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

function OrderPage(props) {
    const history = useHistory();
    const classes = useStyles();
    const DATA_TABLE_TYPE = "ORDER";
    const [isLoadingData, setLoadingData] = React.useState(false);
    const [ordersData, setOrderData] = React.useState([]);
    const [ordersDataOrigin, setOrderDataOrigin] = React.useState([]);
    const [showError, setShowError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("")
    const { value: status, onChange: setStatus } = useInput("");

    const getAllOrder = async () => {
        setLoadingData(true);
        try{
            const response = await orderService.getOrders();
            setOrderData(response.data);
            setOrderDataOrigin(response.data);
            setLoadingData(false);

        } catch(error) {
            setLoadingData(false);
            setShowError(true);
            setErrorMsg(error.message); 
        }
    }

    const deleteOrder = async (data) => {
        const allDeleteAppointmentRequest = data.treatments.map(item => {
            return appointmentService.deleteAppointmentById(item.appointmentId);
        })

        console.log(allDeleteAppointmentRequest);
        try{
            const response = await orderService.deleteOrderById(data.id);
            if(response && response.status === OK) {
                Promise.all(allDeleteAppointmentRequest);
                getAllOrder();
            }
        } catch(error) {
            setLoadingData(false);
            setShowError(true);
            setErrorMsg(error.message); 
        }
    }

    const changeStatusOrder = async(data, status) => {
        if (data && status) {
            const orderUpdate = {
                ...data,
                status
            }
            try{
                const response = await orderService.updateOrders(orderUpdate);
                if (response && response.status === OK){
                    getAllOrder();
                }
            } catch (error) {
                setLoadingData(false);
                setShowError(true);
                setErrorMsg(error.message); 
            }
        } 
    }

    const filterOrderByStatus = (status) => {
        if (status) {
            const dataFilter = ordersDataOrigin.filter(item => item.status === status);
            setOrderData(dataFilter);
        } else {
            setOrderData(ordersDataOrigin);
        }
    }

    React.useEffect(() => {
        getAllOrder();
    }, []);
    

    React.useEffect(() => {
        filterOrderByStatus(status);
    }, [status]);

    return (
        <div className={classes.container}>
            {isLoadingData && <LoadingComponent />}
            <Snackbar
                open={showError}
                onClose={() => setShowError(false)}
                TransitionComponent={TransitionDown}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            > 
                <Alert severity="error">{errorMsg}</Alert>
            </Snackbar>
            <div className={classes.header}>
                <div className={classes.leftContent}>
                    <div className={classes.filterGroup}>
                        <Select
                            displayEmpty
                            size="small"
                            className={classes.fieldSelect}
                            variant="outlined"
                            value={status}
                            onChange={setStatus}
                        >
                            <MenuItem value="">Tình trạng đơn hàng</MenuItem>
                            {
                                orderStatus.map(item => (
                                    <MenuItem value={item}>{item}</MenuItem>
                                ))
                            }
                        </Select>
                    </div>
                </div>
                <div className={classes.rightContent}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.push("/admin/add-order")}
                    >
                        Tạo đơn hàng
                    </Button>
                </div>
            </div>

            <div className={classes.tableContent}>
                <DataTable
                    data={ordersData}
                    columns={columns}
                    type={DATA_TABLE_TYPE}
                    hasButtonActions
                    height="calc(100vh - 250px)"
                    onDelete={(id) => deleteOrder(id)}
                    onChangeStatus={(data, status) => changeStatusOrder(data, status)}
                />
            </div>
        </div>
    );
}

export default OrderPage;
import { Button, makeStyles, MenuItem, Select } from '@material-ui/core';
import ItemProductRecommend from 'components/ItemProductRecommend';
import { storeData } from 'pages/FakeData';
import React from 'react';
import { useHistory } from 'react-router-dom';

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
        format: (value) => value.name,
    },
    {
        id: 'time',
        label: 'Thời gian',
        minWidth: 150,
        align: 'center',
    },
    {
        id: 'total ',
        label: 'Tổng tiền',
        minWidth: 70,
        align: 'left',
        format: (value) => value.name,
    },
]

function OrderPage(props) {
    const history = useHistory();
    const classes = useStyles();
    const DATA_TABLE_TYPE = "ORDER";
    
    const { value: location, onChange: setLocation } = React.useState("");
    const { value: status, onChange: setStatus } = React.useState("");
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.leftContent}>
                    <div className={classes.filterGroup}>
                        <Select
                            displayEmpty
                            size="small"
                            className={classes.fieldSelect}
                            variant="outlined"
                            value={location}
                            onChange={setLocation}
                        >
                            <MenuItem value="">Cửa Hàng</MenuItem>
                            {
                                storeData.map(item => (
                                    <MenuItem value={item}> {item} </MenuItem>
                                ))
                            }
                        </Select>

                        <Select
                            displayEmpty
                            size="small"
                            className={classes.fieldSelect}
                            variant="outlined"
                            value={status}
                            onChange={setStatus}
                        >
                            <MenuItem value="">Tình trạng đơn hàng</MenuItem>
                            <MenuItem value={1}>Đã Thanh Toán</MenuItem>
                            <MenuItem value={2}>Đã hoàn thành</MenuItem>
                            <MenuItem value={2}>Hủy</MenuItem>
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
                <DataTable data={[]} columns={columns} type={DATA_TABLE_TYPE} hasMoreTools height="calc(100vh - 250px)" />
            </div>
        </div>
    );
}

export default OrderPage;
import { Button, Dialog, InputAdornment, makeStyles, MenuItem, Select, TextField, useTheme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useInput from 'hooks/input.hooks';
import DataTable from 'pages/admin/Components/DataTable';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import avatarDefault from 'assets/icons/spa_logo.png'

import CustomerModal from './CustomerModal';

const DATA_TABLE_TYPE = "CUSTOMER";

const columns = [
    { 
      id: 'id',
      label: 'Mã NV',
      minWidth: 100,
      align: "center",
    },
  
    {
      id: 'fullname',
      label: 'Tên nhân viên',
      minWidth: 150,
      align: 'left',
    },
    {
      id: 'branch',
      label: 'Cửa hàng',
      minWidth: 150,
      align: 'center',
      format: (value) => value.name,
    },
    {
        id: 'phonenumber',
        label: 'Số điện thoại',
        minWidth: 150,
        align: 'center',
      },
    {
      id: 'level',
      label: 'Hạng mục',
      minWidth: 70,
      align: 'left',
      format: (value) => value.name,
    },
    
];

const customerData = [
    {
        id: `${Math.round(Math.random() * 1000000)}`,
        fullname: "Nguyễn Mai",
        level: {
            id: 0,
            name: 'Chưa có hạng mục',
        },
        branch: {
            id: 2,
            name: 'Meo Meo'
        },
        avatar: avatarDefault,
        phonenumber: '0346795245',
    },
    {
        id: `${Math.round(Math.random() * 1000000)}`,
        fullname: "Hoàng Thùy Linh",
        level: {
            id: 1,
            name: 'Hạng  vàng',
        },
        branch: {
            id: 1,
            name: 'Gâu Gâu'
        },
        phonenumber: '0346795245',
    },
    {
        id: `${Math.round(Math.random() * 1000000)}`,
        fullname: "Nguyễn Phi Hổ",
        level: {
            id: 2,
            name: 'Hạng Bạc',
        },
        branch: {
            id: 1,
            name: 'Gâu Gâu'
        },
        phonenumber: '0346795245',
    },
    {
        id: `${Math.round(Math.random() * 1000000)}`,
        fullname: "Ôm Thùng MTV",
        level: {
            id: 3,
            name: 'Hạng đồng',
        },
        branch: {
            id: 2,
            name: 'Meo Meo'
        },
        phonenumber: '0346795245',
    },
]

const useStyles = makeStyles((theme) => ({
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

    selectCategory: {
        width: 250, 
    },

    addEmployeeModal: {
        width: 500,
        padding: 10,
        background: 'white'
    },

    formGroup: {
        marginBottom: 20,
    },

    inputLabel: {
        fontSize: 16,
        color: '#686868',
        fontWeight: 500, 
    },

    selectFileBtn: {
        width: 150,
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#dddd',
        borderRadius: 10,
        border: 'dashed 2px #686868',
        cursor: 'pointer',
        position: 'relative',
        overflow: "hidden",
        '& input': {
            width: 300,
            height: 300,
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
        }
    },

    fileSelectedContainer: {
        position: 'relative',
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
        '& img': {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },
    
    removeSelectedBtn: {
        position: "absolute",
        top: 5,
        right: 5,
        width: 30,
        height: 30,
        "&:hover": {
            background: "#ff2e00c2",
        }
    },

    modal: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '100% !important',
        },
    },

    modalHeader: {
        height: 50,
        borderBottom: 'solid 1px #dddddd',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
    },
    
    headerTitle: {
        fontSize: 20,
        color: '#1981ed'
    },

    modalFooter: {
        borderTop: 'solid 1px #dddddd',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        columnGap: 10,
    }

}))

function ManageCustomer(props) {
    const classes = useStyles();
    const [ isOpenModal, setOpenModal ] = React.useState(false);
    const { value: branchFilter, onChange: setBranchFilter } = useInput(0);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    const handleToggleModal = (value) => {
        setOpenModal(value);
    }

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.leftContent}>
                        <div className={classes.filterGroup}>
                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                label="Tìm kiếm"
                                placeholder="Nhập tên nhân viên"
                                variant="outlined"
                                size='small'
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <SearchIcon />
                                      </InputAdornment>
                                    ),
                                }}
                            />

                            <Select
                                value={branchFilter}
                                onChange={setBranchFilter}
                                displayEmpty
                                size="small"
                                className={classes.fieldSelect}
                                variant="outlined"
                            >
                                <MenuItem value={0}>Chi Nhánh</MenuItem>
                                <MenuItem value={1}>Meo Meo</MenuItem>
                                <MenuItem value={2}>Gâu Gâu</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className={classes.rightContent}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => setOpenModal(true)}
                        >
                             Thêm Khách mới
                        </Button>
                    </div>
                </div>
            </div>
            <div className={classes.tableContent}>
                <DataTable data={customerData} columns={columns} type={DATA_TABLE_TYPE} hasMoreTools height="calc(100vh - 250px)"/>
            </div>

            <div>
                <Dialog
                    className={classes.modal}
                    fullScreen={fullScreen}
                    onClose={()=> setOpenModal(false)}
                    open={isOpenModal}
                >
                    <CustomerModal
                        onToggleModal={(value) => handleToggleModal(value)}
                        title="Thêm Khách hàng mới"
                        type="ADD"
                    />
                </Dialog>
            </div>
        </div>
    );
}

export default ManageCustomer;
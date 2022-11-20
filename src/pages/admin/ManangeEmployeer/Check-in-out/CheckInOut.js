import { InputAdornment, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useInput from 'hooks/input.hooks';
import CheckInTable from 'pages/admin/Components/CheckInTable';
import React from 'react';

const columns = [
    { 
      id: 'id',
      label: 'Mã NV',
      minWidth: 100,
      align: "left",
    },
  
    {
      id: 'fullname',
      label: 'Tên nhân viên',
      minWidth: 100,
      align: 'left',
    },
    {
      id: 'branch',
      label: 'Cửa hàng',
      minWidth: 100,
      align: 'left',
      format: (value) => value.name,
    },

    {
        id: 'status',
        label: 'Trạng thái',
        minWidth: 100,
        align: 'left',
        format: (value) => getCheckStatus(value.checkIn, value.checkOut),
    },
    
];

const getCheckStatus = (isIn, isOut) => {
    if (isIn && isOut){
        return  "Đã chấm công";
    }

    if (isIn && !isOut) {
        return "Đã check in"
    }

    if (!isIn && !isOut) {
        return "Chưa chấm công"
    }
}

const checkInData = [
    {
        id: Math.round(Math.random() * 10000),
        fullname: "Nguyễn Mai",
        branch: {
            id: 1,
            name: "Meo Meo"
        },
        status: {
            checkIn: true,
            checkOut: false,
        }
    },
    {
        id: Math.round(Math.random() * 10000),
        fullname: "Nguyễn Mai",
        branch: {
            id: 1,
            name: "Meo Meo"
        },
        status: {
            checkIn: true,
            checkOut: false,
        }
    },
    {
        id: Math.round(Math.random() * 10000),
        fullname: "Nguyễn Mai",
        branch: {
            id: 1,
            name: "Meo Meo"
        },
        status: {
            checkIn: true,
            checkOut: false,
        }
    },
    {
        id: Math.round(Math.random() * 10000),
        fullname: "Nguyễn Mai",
        branch: {
            id: 1,
            name: "Meo Meo"
        },
        status: {
            checkIn: true,
            checkOut: false,
        }
    },
    {
        id: Math.round(Math.random() * 10000),
        fullname: "Nguyễn Mai",
        branch: {
            id: 1,
            name: "Meo Meo"
        },
        status: {
            checkIn: true,
            checkOut: false,
        }
    }
];

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

    inputfield: {
        width: '100%'
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

function CheckInOut(props) {
    const classes = useStyles();
    const { value: branchFilter, onChange: setBranchFilter } = useInput(0);
    
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.leftContent}>
                        <Typography className={classes.headerTitle}> Chấm Công nhân viên </Typography>
                    </div>
                    <div className={classes.rightContent}>
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
                </div>
            </div>
            <div className={classes.tableContent}>
                <CheckInTable columns={columns} rows={checkInData} />
                {/* <DataTable data={employeeData} columns={columns} type={DATA_TABLE_TYPE} hasMoreTools height="calc(100vh - 250px)"/> */}
            </div>

        </div>
    );
}

export default CheckInOut;
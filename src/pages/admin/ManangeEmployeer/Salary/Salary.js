import { InputAdornment, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useInput from 'hooks/input.hooks';
import DataTable from 'pages/admin/Components/DataTable';
import React from 'react';

const columns = [
    { 
      id: 'moth',
      label: 'Tháng',
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
      minWidth: 100,
      align: 'center',
      format: (value) => value.name,
    },
    {
        id: 'amountTask',
        label: 'Số lượt làm',
        minWidth: 150,
        align: 'center',
      },
    {
      id: 'wage',
      label: 'Tiền công',
      minWidth: 70,
      align: 'left',
    },
    {
        id: 'discount',
        label: 'Hoa hồng bán',
        minWidth: 150,
        align: 'left',
    },

    {
        id: 'time',
        label: 'Số giờ làm',
        minWidth: 70,
        align: 'left',
    },

    {
        id: 'day',
        label: 'Ngày',
        minWidth: 70,
        align: 'left',
    },

    {
        id: 'salary',
        label: 'Tiền lương',
        minWidth: 70,
        align: 'left',
    },

    
];

const salaryData = [];

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

    rightContent: {
        display: 'flex',
        alignItems: 'center',
        columnGap: 20,
    },

    tableContent: {
        height: "calc(100vh - 190px)",
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
    },

    totalReportBrief: {
      margin: "10px 0px",  
    },

    totalReportItem: {
        padding: 20,
        height: 30,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },

    reportItemText: {
        fontSize: 20,
        fontWeight: 500,
        minWidth: 200,
        color: "#03a6ff",
    },

    reportItemValue: {
        fontSize: 20,
        fontWeight: 500,
        minWidth: 200,
        color: "#686868",
    }

    

}))

function Salary(props) {
    const classes = useStyles();
    const { value: branchFilter, onChange: setBranchFilter } = useInput(0);
    const { value: monthFilter, onChange: setMonthFilter } = useInput(1);
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
                        {
                            (monthFilter === 0) &&
                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                type="date"
                                variant="outlined"
                                defaultValue={new Date().toISOString().slice(0, 16)}
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        }
                        <Select
                            value={monthFilter}
                            onChange={setMonthFilter}
                            displayEmpty
                            size="small"
                            className={classes.fieldSelect}
                            variant="outlined"
                        >
                            <MenuItem value={1}>Tháng này</MenuItem>
                            <MenuItem value={-1}>Tháng trước</MenuItem>
                            <MenuItem value={0}>Chọn Tháng</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className={classes.tableContent}>
                <div className={classes.totalReportBrief}>
                    <div className={classes.totalReportItem}>
                        <Typography className={classes.reportItemText}> Tiền công </Typography>
                        <Typography className={classes.reportItemValue}>0 đ</Typography>
                    </div>

                    <div className={classes.totalReportItem}>
                        <Typography className={classes.reportItemText}> Hoa hồng bán hàng </Typography>
                        <Typography className={classes.reportItemValue}>0 đ</Typography>
                    </div>

                    <div className={classes.totalReportItem}>
                        <Typography className={classes.reportItemText}> Tiền lương </Typography>
                        <Typography className={classes.reportItemValue}>0 đ</Typography>
                    </div>
                </div>
                <DataTable data={salaryData} columns={columns} minHeight="300px"/>
            </div>
        </div>
    );
}

export default Salary;
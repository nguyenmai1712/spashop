import { Box, Button, Dialog, IconButton, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import React from 'react';
import { useHistory } from 'react-router-dom';
import emptyBox from 'assets/icons/empty-box.png'
import EmployeeModal from 'pages/admin/ManangeEmployeer/Employee/EmployeeModal';
import { DATA_TABLE_TYPE } from 'constant';
import CustomerModal from '../ManageCustomer/CustomerModal';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },

    container: {
        position: 'relative',
    },

    emptyDataTable: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -60%)',
        marginTop: 50,
        '&>img': {
            width: 150,
            height: 150,
        }
    },

    emptyText: {
        fontSize: 20,
        fontWeight: 500,
        color: '#686868'
    },

    modal: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '100% !important',
        },
    },

});

export default function DataTable({ data, columns, type, height, minHeight, hasMoreTools, onDelete, onSelectRow }) {
    const rows = data;
    const history = useHistory();
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [isOpenEmployModal, setOpenEmployeeModal] = React.useState(false);
    const [employeeTitle, setEmployTitle] = React.useState(false);
    const [employeeModalType, setEmployeeModalType] = React.useState('');
    const [employeeModalData, setEmployeeModalData] = React.useState('');

    const [isOpenCustomerModal, setOpenCustomerModal] = React.useState(false);
    const [customerTitle, setCustomerTitle] = React.useState(false);
    const [customerModalType, setCustomerModalType] = React.useState('');
    const [customerModalData, setCustomerModalData] = React.useState('');


    const EMPLOYEE_MODAL_TYPE = {
        ADD: 'ADD',
        EDIT: 'EDIT',
        DETAIL: 'DETAIL',
    }

    const CUSTOMER_MODAL_TYPE = {
        ADD: 'ADD',
        EDIT: 'EDIT',
        DETAIL: 'DETAIL',
    }

    const FORM_TYPE = {
        EDIT: 'EDIT',
        ADD: 'ADD',
        DETAIL: 'DETAIL'
    }


    const handleNavigateDetail = (data) => {
        switch (type) {
            case DATA_TABLE_TYPE.PRODUCT:
                history.push({
                    pathname: `/admin/product-detail/${data.id}`,
                    state: { data },
                });
                break;
            case DATA_TABLE_TYPE.TREATMENT:
                history.push({
                    pathname: `/admin/treatment-detail/${data.id}`,
                    state: { data },
                })
                break;
            case DATA_TABLE_TYPE.EMPLOYEE:
                handleToggleModal(true);
                setEmployTitle("Chi tiết");
                setEmployeeModalType(EMPLOYEE_MODAL_TYPE.DETAIL);
                setEmployeeModalData(data);
                break;
            case DATA_TABLE_TYPE.CUSTOMER:
                handleToggleModal(true);
                setCustomerTitle("Chi tiết");
                setCustomerModalType(CUSTOMER_MODAL_TYPE.DETAIL);
                setCustomerModalData(data);
                break;
            case DATA_TABLE_TYPE.APPOINTMENT:
                onSelectRow(data, FORM_TYPE.DETAIL);
                break;
            default:
                return
        }
    };

    const handleNavigateEdit = (data) => {
        switch (type) {
            case DATA_TABLE_TYPE.PRODUCT:
                history.push({
                    pathname: `/admin/product-edit/${data.id}`,
                    state: { data, type: FORM_TYPE.EDIT },
                });
                break;
            case DATA_TABLE_TYPE.TREATMENT:
                history.push({
                    pathname: `/admin/treatment-edit/${data.id}`,
                    state: { data, type: FORM_TYPE.EDIT },
                })
                break;
            case DATA_TABLE_TYPE.EMPLOYEE:
                handleToggleModal(true);
                setEmployTitle("Chỉnh sửa thông tin nhân viên");
                setEmployeeModalType(EMPLOYEE_MODAL_TYPE.EDIT);
                setEmployeeModalData(data);
                break;
            case DATA_TABLE_TYPE.CUSTOMER:
                handleToggleModal(true);
                setCustomerTitle("Chi tiết");
                setCustomerModalType(CUSTOMER_MODAL_TYPE.EDIT);
                setCustomerModalData(data);
                break;
            case DATA_TABLE_TYPE.APPOINTMENT:
                onSelectRow(data, FORM_TYPE.EDIT);
                break;
            default:
                return;
        };
    };

    const handleDelete = (data) => {
        switch (type) {
            case "PRODUCT":
                onDelete(data.id);
                break;
            case "TREATMENT":
                onDelete(data.id);
                break;
            case "APPOINTMENT":
                onDelete(data.id);
                break;
            default:
                return;
        };
    };

    const handleToggleModal = (value) => {
        switch (type) {
            case DATA_TABLE_TYPE.EMPLOYEE:
                setOpenEmployeeModal(value);
                break;
            case DATA_TABLE_TYPE.CUSTOMER:
                setOpenCustomerModal(value);
                break;
            default:
                return;
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };



    return (
        <>
            <Paper className={classes.root}>
                <TableContainer className={classes.container} style={{ height, minHeight }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                {hasMoreTools && <TableCell> Xem thêm </TableCell>}
                            </TableRow>
                        </TableHead>
                        {
                            rows.length > 0 ? (
                                <TableBody className={classes.tableBody}>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align} style={column.styles}>
                                                            {column.format ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                                {
                                                    hasMoreTools &&
                                                    <TableCell>
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <div>
                                                                    <IconButton variant="contained" color="primary" {...bindTrigger(popupState)}>
                                                                        <MoreHorizIcon />
                                                                    </IconButton>
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'center',
                                                                        }}
                                                                    >
                                                                        <Box p={2} style={{ display: 'flex', flexDirection: 'column' }}>
                                                                            <Button className={classes.seemoreItem}
                                                                                onClick={() => handleNavigateDetail(row)}
                                                                            > Xem chi tiết </Button>
                                                                            <Button className={classes.seemoreItem}
                                                                                onClick={() => handleNavigateEdit(row)}
                                                                            >Chỉnh sửa</Button>
                                                                            <Button
                                                                                className={classes.seemoreItem}
                                                                                color="secondary"
                                                                                onClick={() => handleDelete(row)}
                                                                            >
                                                                                Xóa
                                                                            </Button>
                                                                        </Box>
                                                                    </Popover>
                                                                </div>
                                                            )}
                                                        </PopupState>
                                                    </TableCell>
                                                }
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            ) : (
                                <div className={classes.emptyDataTable}>
                                    <img src={emptyBox} alt="" />
                                    <Typography className={classes.emptyText}> Trống </Typography>
                                </div>
                            )
                        }

                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <Dialog
                className={classes.modal}
                onClose={() => setOpenEmployeeModal(false)}
                open={isOpenEmployModal}
            >
                <EmployeeModal
                    onToggleModal={(value) => handleToggleModal(value)}
                    title={employeeTitle}
                    type={employeeModalType}
                    data={employeeModalData}
                />
            </Dialog>

            <Dialog
                className={classes.modal}
                onClose={() => setOpenCustomerModal(false)}
                open={isOpenCustomerModal}
            >
                <CustomerModal
                    onToggleModal={(value) => handleToggleModal(value)}
                    title={customerTitle}
                    type={customerModalType}
                    data={customerModalData}
                />
            </Dialog>
        </>

    );
}

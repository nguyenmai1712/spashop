import {
    Button,
    Dialog,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Snackbar,
    TextField,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import {
    Agenda,
    Day,
    DragAndDrop,
    Inject,
    Month,
    Resize,
    ScheduleComponent,
    Week,
    WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import LoadingComponent from 'components/LoadingComponent';
import { OK } from 'constant';
import useInput from 'hooks/input.hooks';
import { appointmentStatus, dayOfWeekLable, storeData } from 'pages/FakeData';
import React from 'react';
import { useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { appointmentService } from 'Services/appointmentService';
import { treatementService } from 'Services/treatmentService';
import ToCurrency from 'Utils/FormatNumber';

import DataTable from '../Components/DataTable';
import AppoinentForm from './AppoinentForm';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    tabpanel: {
        width: '100%',
        height: 'calc(100vh - 120px)',
        background: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.8)',
    },
    tabContent: {
        width: '100%',
        height: '100%',
        padding: '16px',
    },

    appointment: {
        padding: '0px 200px',
    },

    header: {
        marginBottom: 20,
    },

    appointmentTitle: {
        fontSize: 24,
        fontWeight: 500,
        color: "#00B4D8"
    },

    appointmentForm: {
        display: 'flex',
        columnGap: 30,
    },

    formItem: {
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

    textarea: {
        width: '100%',
        height: 350,
        borderRadius: 10,
        padding: 10,
        border: 'solid 2px #ddd'
    },

    fieldSelect: {
        height: 40,
        width: '100%',
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

    serviceInfo: {
        minHeight: 150,
        width: '100%',
        padding: '16px',
    },

    serviceInfoItem: {
        display: 'flex',
    },

    infoName: {
        minWidth: '200px',
        color: '#686868',
        fontSize: 15,
        fontWeight: 500,
    },

    infoValue: {
        color: '#202020',
        fontSize: 15,
        fontWeight: 500,
    },

    buttonGroup: {
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        columnGap: 20,
    },

    listDayOfWeek: {
        display: 'flex',
    },

    dayCheckbox: {
        display: 'flex',
        alignItems: 'center',
    },

    radioGroup: {
        display: 'flex',
        flexDirection: 'row'
    },

    modal: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '100% !important',
        },
    },


}));

const columns = [
    {
		id: 'id',
		label: '#',
		minWidth: 50,
		align: "center",
	},

	{
		id: 'Customer',
		label: 'Khách hàng',
		minWidth: 50,
		align: "left",
	},

    {
		id: 'Service',
		label: 'Dịch vụ',
		minWidth: 50,
		align: "left",
        format: (item) => item.name,
	},

    {
		id: 'StartTime',
		label: 'Ngày',
		minWidth: 50,
		align: "left",
        format: (date) => new Date(date).toDateString(),
	},

    {
		id: 'Technician',
		label: 'Kĩ thuật viên',
		minWidth: 50,
		align: "left",
	},

    {
		id: 'Status',
		label: 'Trạng thái',
		minWidth: 50,
		align: "left",
	},

]

function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index } = props;

    return (
        <div
            className={classes.tabpanel}
        >
            {value === index && (
                <div className={classes.tabContent}>
                    <Typography>{children}</Typography>
                </div>
            )}
        </div>
    );
}


function dates(current) {
    var week= new Array(); 
    current.setDate((current.getDate() - current.getDay() +1));
    for (var i = 0; i < 7; i++) {
        week.push(
            new Date(current)
        ); 
        current.setDate(current.getDate() +1);
    }
    return week; 
}

function handleGetDate(date, time) {
    const date_parse = Date.parse(date.toDateString()+" "+time);
    return new Date(date_parse);
}



export default function Calendars() {
    const DATA_TABLE_TYPE = "APPOINTMENT"
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const allDayOfWeek = dates(new Date());
    const [ isFetching, setFetching ] = React.useState(false);
    const [ treatments, setTreatment ] = React.useState([]);
    const [ day, setDay ] = React.useState([]);
    const [ appointmentData, setAppointmentData ] = React.useState();
    const [ isOpenSnackbar, setOpenSnackbar ] = React.useState();
    const [ isOpenDialogDetail, setOpenDialogDetail ] = React.useState();
    const [ selectedData, setSelectedData ] = React.useState();
    const [ typeForm, setTypeForm ] = React.useState();
    
    const { value: customerName, onChange: setCustomerName } = useInput("");
    const { value: technicanName, onChange: setTechnicanName } = useInput("");
    const { value: startTime, onChange: setStartTime } = useInput("");
    const { value: endTime, onChange: setEndTime } = useInput("");
    const { value: description, onChange: setDescription } = useInput("");
    const { value: status, onChange: setStatus } = useInput("");
    const { value: service, onChange: setService } = useInput("");
    const { value: location, onChange: setLocation } = useInput("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeTab = (index) => {
        setValue(index);
    };

    const handleSelectDay = (e) => {
        setDay(e.target.value);
    }

    const popupOpen = (args) => {
        let isEmptyCell =
            args.target.classList.contains('e-work-cells') ||
            args.target.classList.contains('e-header-cells');
        if ((args.type === 'QuickInfo' || args.type === 'Editor') && isEmptyCell) {
            args.cancel = true;
        }
    }

    const handleSubmit = async () => {
        if (
            customerName &&
            technicanName &&
            startTime &&
            endTime &&
            description &&
            service &&
            status
        ) {
            const newAppointment = {
                Customer: customerName,            
                Subject: service.name,
                StartTime: handleGetDate(allDayOfWeek[day], startTime).toString(),
                EndTime:  handleGetDate(allDayOfWeek[day], endTime).toString(),
                Status: status,
                Technician: technicanName,
                Location: location,
                Description: description,
                Service: service,
            }
            handleAddAppointment(newAppointment);
            handleChangeTab(0)
        } else {
            setOpenSnackbar(true);
        }
        
    }

    const handleDeleteAppointmentById = async (id) => {
        try {
            setFetching(true);
            const response = await appointmentService.deleteAppointmentById(id);
            if (response && response.status === OK){
                handleGetAppointments();
                setTimeout(() => {
                    setFetching(false);
                }, 1000);
            }
        } catch (error) {
            setFetching(false)
        }
    };

    const handleAddAppointment = async (data) => {
        try {
            setFetching(true)
            const response = await appointmentService.addAppointment(data);
            if (response){
                console.log(response);
                handleGetAppointments();
                setTimeout(() => {
                    setFetching(false);
                }, 1000);
            }
        } catch (error) {
            setFetching(false)
        }
    };

    const handleGetTreatment = async () => {
        try {
            setFetching(true);
            const response = await treatementService.getTreatments();
            if ( response && response.status === OK) {
                setTreatment(response.data);
                setTimeout(() => {
                    setFetching(false);
                }, 1000);
            }
        } catch (error) {
            setFetching(false);
        }
    }

    const handleGetAppointments  = async () => {
        try {
            setFetching(true);
            const response = await appointmentService.getAppointments();
            if (response && response.status === OK) {
                setAppointmentData(response.data);
                setTimeout(() => {
                    setFetching(false);
                }, 1000);
            }
        } catch (error) {
            setFetching(false)
        }
    }

    const handleSeeDetail = (data, type) => {
        setSelectedData(data);
        setTypeForm(type)
        setOpenDialogDetail(true);
    }

    useEffect(() => {
        handleGetTreatment();
        handleGetAppointments();
    }, []);

    return (
        <div className={classes.root}>
            {
                isFetching && <LoadingComponent />
            }

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isOpenSnackbar}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert severity="error">Vui lòng điền đầy đủ các thông tin!</Alert>
            </Snackbar>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Lịch" />
                    <Tab label="Tạo cuộc hẹn" />
                    <Tab label="Xem chi tiết cuộc hẹn" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeTab}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ScheduleComponent
                        height="calc(100vh - 170px)"
                        currentView='day'
                        eventSettings={{
                            dataSource: appointmentData,
                        }}
                        selectedDate={new Date()}
                        popupOpen={popupOpen}
                    >
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
                    </ScheduleComponent>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className={classes.appointment}>
                        <div className={classes.header}>
                            <Typography className={classes.appointmentTitle}>Thêm cuộc hẹn mới</Typography>
                        </div>

                        <RadioGroup value={parseInt(day)} onChange={handleSelectDay} className={classes.radioGroup}>
                            {
                                dayOfWeekLable.map((item, index) => (
                                    <FormControlLabel value={index} control={<Radio />} label={item} />
                                ))
                            }
                        </RadioGroup>
                        <div className={classes.appointmentForm}>
                            <div className={classes.formItem}>
                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Tên khách hàng </Typography>
                                    <TextField
                                        className={classes.inputfield}
                                        id="standard-textarea"
                                        placeholder="Nhập tên khách hàng"
                                        variant="outlined"
                                        size='small'
                                        value={customerName}
                                        onChange={setCustomerName}
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Tên kĩ thuật viên </Typography>
                                    <TextField
                                        className={classes.inputfield}
                                        id="standard-textarea"
                                        placeholder="Nhập tên kĩ thuật viên"
                                        variant="outlined"
                                        size='small'
                                        value={technicanName}
                                        onChange={setTechnicanName}
                                    />
                                </div>
                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Thời gian bắt đầu </Typography>
                                    <TextField
                                        className={classes.inputfield}
                                        id="standard-textarea"
                                        type="time"
                                        variant="outlined"
                                        size='small'
                                        value={startTime}
                                        onChange={setStartTime}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>

                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Thời gian kết thúc </Typography>
                                    <TextField
                                        className={classes.inputfield}
                                        id="standard-textarea"
                                        type="time"
                                        variant="outlined"
                                        size='small'
                                        value={endTime}
                                        onChange={setEndTime }
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>


                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Ghi chú </Typography>
                                    <textarea className={classes.textarea} placeholder="Nhập ghi chú..." defaultValue={description} onChange={setDescription}>
                                    </textarea>
                                </div>
                            </div>
                            <div className={classes.formItem}>
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

                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Trạng thái</Typography>
                                    <Select
                                        displayEmpty
                                        size="small"
                                        className={classes.fieldSelect}
                                        variant="outlined"
                                        value={status}
                                        onChange={setStatus}
                                    >
                                        <MenuItem value={""}> Chọn trạng thái </MenuItem>
                                        {
                                            appointmentStatus.map(item => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </div>

                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Chọn dịch vụ </Typography>
                                    <Select
                                        displayEmpty
                                        size="small"
                                        className={classes.fieldSelect}
                                        variant="outlined"
                                        value={service}
                                        onChange={setService}
                                    >
                                        <MenuItem value=""> Chọn dịch vụ</MenuItem>
                                        {
                                            treatments && treatments.map(item => (
                                                <MenuItem value={item}> {item.name} </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </div>

                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Thông tin chi tiết dịch vụ</Typography>
                                    <div className={classes.serviceInfo}>
                                    {
                                        service && ( <>
                                            <div className={classes.serviceInfoItem}>
                                                <span className={classes.infoName}> Tên dịch vụ </span>
                                                <span className={classes.infoValue}> { service.name && service.name }</span>
                                            </div>

                                            <div className={classes.serviceInfoItem}>
                                                <span className={classes.infoName}> Số buổi tối thiểu </span>
                                                <span className={classes.infoValue}> {service.amount && service.amount } buổi</span>
                                            </div>

                                            <div className={classes.serviceInfoItem}>
                                                <span className={classes.infoName}> Thời lượng </span>
                                                <span className={classes.infoValue}> { service.duration && service.duration } phút</span>
                                            </div>

                                            <div className={classes.serviceInfoItem}>
                                                <span className={classes.infoName}> Giá tiền </span>
                                                <span className={classes.infoValue}> { service.newPrice && ToCurrency(service.newPrice) }đ</span>
                                            </div></>
                                        )
                                    }
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className={classes.buttonGroup}>
                                    <Button variant="contained"> Hủy </Button>
                                    <Button variant='contained' color="primary" onClick={handleSubmit}> Thêm </Button>
                                    <Button variant='contained' color="secondary"> Thanh Toán </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className={classes.tableContent}>
                        <DataTable
                            height='calc(100vh - 250px)'
                            data={appointmentData}
                            columns={columns}
                            type={DATA_TABLE_TYPE}
                            hasMoreTools
                            onDelete={(id) => handleDeleteAppointmentById(id)}
                            onSelectRow={(data, type) => handleSeeDetail(data, type)}
                        />
                    </div>
                </TabPanel>
            </SwipeableViews>

            <Dialog open={isOpenDialogDetail} onClose={()=> setOpenDialogDetail(false)} className={classes.modal}>
                <AppoinentForm appointmentData={selectedData} type={typeForm} onCloseModal={() => setOpenDialogDetail(false)}/>
            </Dialog>
        </div>
    );
}

import {
    Button,
    CircularProgress,
    FormControlLabel,
    makeStyles,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Snackbar,
    TextField,
    Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { CREATED, OK } from 'constant';
import useInput from 'hooks/input.hooks';
import { appointmentStatus, dayOfWeekLable, storeData } from 'pages/FakeData';
import React from 'react';
import { useEffect } from 'react';
import { appointmentService } from 'Services/appointmentService';
import { treatementService } from 'Services/treatmentService';
import ToCurrency from 'Utils/FormatNumber';

const useStyles = makeStyles((theme) => ({
    appointment: {
        padding: "16px"
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
        minWidth: '150px',
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

    buttonSubmit: {
        minWidth: 100,
    },

}));

const FORM_TYPE = {
    EDIT: 'EDIT',
    ADD: 'ADD',
    DETAIL: 'DETAIL'
}

function dates(current) {
    var week = [];
    current.setDate((current.getDate() - current.getDay() + 1));
    for (var i = 0; i < 7; i++) {
        week.push(
            new Date(current)
        );
        current.setDate(current.getDate() + 1);
    }
    return week;
}

function handleGetDate(date, time) {
    const date_parse = Date.parse(date.toDateString() + " " + time);
    return new Date(date_parse);
}

function handleGetTime(date) {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${("0" + hours).slice(-2)}:${('0' + minutes).slice(-2)}`
}


function AppoinentForm({ appointmentData, type, onCloseModal, updateData, serivceDefault, onAddOrder  }) {
    const classes = useStyles();
    const [treatments, setTreatment] = React.useState([]);
    const [day, setDay] = React.useState(appointmentData ? appointmentData.dayOfWeek : "");
    const allDayOfWeek = dates(new Date());
    const [isFetching, setFetching] = React.useState(false);
    const [isOpenSnackbar, setOpenSnackbar] = React.useState(false);
    

    const { value: customerName, onChange: setCustomerName } = useInput(appointmentData ? appointmentData.Customer : "");
    const { value: technicanName, onChange: setTechnicanName } = useInput(appointmentData ? appointmentData.Technician : "");
    const { value: startTime, onChange: setStartTime } = useInput(appointmentData ? handleGetTime(appointmentData.StartTime) : "");
    const { value: endTime, onChange: setEndTime } = useInput(appointmentData ? handleGetTime(appointmentData.EndTime) : "");
    const { value: description, onChange: setDescription } = useInput(appointmentData ? appointmentData.Description : "");
    const { value: status, onChange: setStatus } = useInput(appointmentData ? appointmentData.Status : "");
    const { value: service, onChange: setService } = useInput(appointmentData ? appointmentData.Service : serivceDefault);
    const { value: location, onChange: setLocation } = useInput(appointmentData ? appointmentData.Location : "");
    const { value: sellAmount, onChange: setSellAmount } = useInput(1);

    const handleSelectDay = (e) => {
        setDay(e.target.value);
    }

    const handleGetTreatment = async () => {
        try {
            const response = await treatementService.getTreatments();
            if (response && response.status === OK) {
                setTreatment(response.data);
            }
        } catch (error) {
        }
    }

    const handleUpdateAppoiment = async (data) => {
        try {
            setFetching(true)
            const response = await appointmentService.updateAppointment(data);
            if (response && response.status === OK) {
                setTimeout(() => {
                    setFetching(false);
                    handleGetAppointments();
                    onCloseModal();
                }, 1000);
            }
        } catch (error) {
            setFetching(false)
        }
    };

    const handleAddAppoiment = async (data) => {
        try {
            setFetching(true)
            const response = await appointmentService.addAppointment(data);
            if (response && response.status === CREATED) {
                setTimeout(() => {
                    setFetching(false);
                    onAddOrder({...response.data.Service, appointmentId: response.data.id, sellAmount, totalPrice: sellAmount * data.Service.newPrice});
                    onCloseModal();
                }, 1000);
            }
        } catch (error) {
            setFetching(false)
        }
    };


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
                ...appointmentData,
                Customer: customerName,
                Subject: service.name,
                StartTime: handleGetDate(allDayOfWeek[day], startTime).toString(),
                EndTime: handleGetDate(allDayOfWeek[day], endTime).toString(),
                Status: status,
                Technician: technicanName,
                Location: location,
                Description: description,
                Service: service,
                date: allDayOfWeek[day],
                dayOfWeek: day,
            }
            if (!type) {
                handleAddAppoiment(newAppointment);
            } else {
                handleUpdateAppoiment(newAppointment);
            }
        } else {
            setOpenSnackbar(true);
        }
    }

    const handleGetAppointments = async () => {
        try {
            const response = await appointmentService.getAppointments();
            if (response && response.status === OK) {
                updateData(response.data);
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        handleGetTreatment();
    }, [])

    return (
        <div>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isOpenSnackbar}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert severity="error">Vui lòng điền đầy đủ các thông tin!</Alert>
            </Snackbar>

            <div className={classes.appointment}>
                <div className={classes.header}>
                    {
                        type ? (
                            <Typography className={classes.appointmentTitle}>
                                {
                                    type === FORM_TYPE.DETAIL ? 'Chi tiết cuộc hẹn' : 'Cập nhật thông tin cuộc hẹn'
                                }
                            </Typography>
                        ) : (
                            <Typography className={classes.appointmentTitle}>
                               Thêm cuộc hẹn mới
                            </Typography>
                        )
                    }
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
                                onChange={setEndTime}
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
                        
                        {
                            type ? (
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
                            ) : (
                                <div className={classes.formGroup}>
                                    <Typography className={classes.inputLabel}> Số lượng mua </Typography>
                                    <TextField
                                        className={classes.inputfield}
                                        id="standard-textarea"
                                        type="number"
                                        variant="outlined"
                                        size='small'
                                        value={sellAmount}
                                        onChange={setSellAmount}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            )
                        }

                        <div className={classes.formGroup}>
                            <Typography className={classes.inputLabel}> Thông tin chi tiết dịch vụ</Typography>
                            <div className={classes.serviceInfo}>
                                {
                                    service && (<>
                                        <div className={classes.serviceInfoItem}>
                                            <span className={classes.infoName}> Tên dịch vụ </span>
                                            <span className={classes.infoValue}> {service.name && service.name}</span>
                                        </div>

                                        <div className={classes.serviceInfoItem}>
                                            <span className={classes.infoName}> Số buổi tối thiểu </span>
                                            <span className={classes.infoValue}> {service.amount && service.amount} buổi</span>
                                        </div>

                                        <div className={classes.serviceInfoItem}>
                                            <span className={classes.infoName}> Thời lượng </span>
                                            <span className={classes.infoValue}> {service.duration && service.duration} phút</span>
                                        </div>

                                        <div className={classes.serviceInfoItem}>
                                            <span className={classes.infoName}> Giá tiền </span>
                                            <span className={classes.infoValue}> {service.newPrice && ToCurrency(service.newPrice)}đ</span>
                                        </div></>
                                    )
                                }
                            </div>

                        </div>
                        <hr />
                        <div className={classes.buttonGroup}>
                            <Button variant="contained" onClick={onCloseModal}> Hủy </Button>
                            {
                                type ? (
                                    <>
                                        {
                                            type !== FORM_TYPE.DETAIL &&
                                            (
                                                !isFetching ? (
                                                    <Button className={classes.buttonSubmit} variant='contained' color="primary" onClick={handleSubmit}>
                                                        Update
                                                    </Button>
                                                ) : (
                                                    <Button className={classes.buttonSubmit} variant='contained' color="primary">
                                                        <CircularProgress color="secondary" size={24} />
                                                    </Button>
                                                )
                                            )
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            !isFetching ? (
                                                <Button className={classes.buttonSubmit} variant='contained' color="primary" onClick={handleSubmit}>
                                                    Thêm
                                                </Button>
                                            ) : (
                                                <Button className={classes.buttonSubmit} variant='contained' color="primary">
                                                    <CircularProgress color="secondary" size={24} />
                                                </Button>
                                            )
                                        }
                                    </>
                                )
                            }

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppoinentForm;
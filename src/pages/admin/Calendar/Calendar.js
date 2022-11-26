import React from 'react';
import {
    ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda,
    DragAndDrop, Resize
} from '@syncfusion/ej2-react-schedule'
import { Button, Dialog, makeStyles, TextField, Typography } from '@material-ui/core';
import useInput from 'hooks/input.hooks';

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
    },

    titleName: {
        fontSize: 24,
        color: '#03a6ff'
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

    appointmentForm: {
        width: 400,
        padding: 16,
    },

    textarea: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        padding: 10,
        border: 'solid 2px #ddd'
    },

    buttonGroup: {
        marginBottom: 20,
        padding: "0px 16px",
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));

const localData = {
	dataSource: [
		{
			Id: 1,
			Customer: {
				name: "Mai Mai",
				phone: "0373932917",
				address: "Tp. Ho Chi Minh"
			},
			Subject: "Chăm sóc da",
			StartTime: new Date(2022, 10, 26, 8, 0),
			EndTime: new Date(2022, 10, 26, 9, 30),
			Status: "Requested",
			Technician: "Mew Moew",
			Location: "Phường 12 Quân Tân Bình",
			Description: "Khách Vip",
		},
		{
			Id: 2,
			Customer: {
				name: "Mai Mai",
				phone: "0373932917",
				address: "Tp. Ho Chi Minh"
			},
			Subject: "Detox",
			StartTime: new Date(2022, 10, 27, 8, 0),
			EndTime: new Date(2022, 10, 27, 9, 30),
			Status: "Cancel",
			Technician: "Mew Moew",
			Location: "Phường 12 Quân Tân Bình",
			Description: "Khách Vip",
		},
		{
			Id: 3,
			Customer: {
				name: "Xông hơi",
				phone: "0373932917",
				address: "Tp. Ho Chi Minh"
			},
			Subject: "Trị mụn",
			StartTime: new Date(2022, 10, 30, 8, 0),
			EndTime: new Date(2022, 10, 30, 9, 30),
			Status: "Completed",
			Technician: "Mew Moew",
			Location: "Phường 12 Quân Tân Bình",
			Description: "Khách Vip",
		},
	]
}



function Calendar(props) {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false);
    const { value: subject, onChange: setSubject } = useInput("");
    const { value: startDate, onChange: setStartDate } = useInput("");
    const { value: endDate, onChange: setEndDate } = useInput("");
    const { value: description, onChange: setDescription } = useInput("");


    const popupOpen = (args) => {
        let isEmptyCell =
          args.target.classList.contains('e-work-cells') ||
          args.target.classList.contains('e-header-cells');
        if ((args.type === 'QuickInfo' || args.type === 'Editor') && isEmptyCell) {
          args.cancel = true;
          setOpenDialog(true);
        }
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    
    return (
        <div className={classes.calendarContainer}>
            <div className={ classes.header}>
                <Typography className={classes.titleName}> Lịch </Typography>
                <Button variant='contained' color="primary" onClick={() => setOpenDialog(true)}> Thêm cuộc hẹn </Button>
            </div>
            <ScheduleComponent
                height="calc(100vh - 100px)" 
                currentView='day'
                eventSettings={{ 
                    ...localData,
                }}
                selectedDate={new Date()}
                popupOpen={popupOpen}
            >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
            </ScheduleComponent>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
            >
                <div className={classes.appointmentForm}>
                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Tên cuộc hẹn </Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Nhập giá trị"
                            type="text"
                            variant="outlined"
                            size='small'
                            value={subject}
                            onChange={setSubject}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Thời gian bắt đầu</Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            type="datetime-local"
                            variant="outlined"
                            size='small'
                            value={startDate}
                            onChange={setStartDate}
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
                            type="datetime-local"
                            variant="outlined"
                            size='small'
                            value={endDate}
                            onChange={setEndDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Ghi chú </Typography>
                        <textarea className={ classes.textarea } placeholder="Nhập ghi chú..." defaultValue={description} onChange={setDescription}>
                        </textarea>
                    </div>
                </div>

                <div className={classes.buttonGroup}>
                    <Button variant="contained" color="secondary"> Thêm </Button>
                </div>
            </Dialog>
        </div>
    );
}

export default Calendar;
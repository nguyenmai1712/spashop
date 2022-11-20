import { Button, IconButton, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useInput from 'hooks/input.hooks';
import React from 'react';

const useStyles = makeStyles(() => ({

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
    }
}));

function EmployeeModal({ onToggleModal, title, data, type,  ...props }) {
    const classes = useStyles();
    const { value: fullname, onChange: setFullname } = useInput(data ? data.fullname :  "");
    const { value: branch, onChange: setBranch } = useInput(data ? data.branch.id : "");
    const { value: role, onChange: setRole } = useInput(data ? data.role.id : "");
    const { value: phoneNumber, onChange: setPhoneNumber } = useInput(data? data.phonenumber : "");
    const [ avatar, setAvatar ]  = React.useState(data? data.avatar : "");

    const handleSelectImage = (e) => {
        const file = e.target.files[0];
        setAvatar(URL.createObjectURL(file))
    }

    const handleRemoveSelectedImage = () => {
        setAvatar("")
    }

    const handleToggleModal = (value) => {
        onToggleModal(value)
    }

    const handleAddEmployee = () => {
        //handle logic here
        
        handleToggleModal(false);
    }
    return (
        <div>
            <div className={classes.addEmployeeModal}>
                    <div className={classes.modalHeader}>
                        <Typography className={classes.headerTitle}> { title }</Typography>
                    </div>
                    <div className={classes.modalModal}>
                        <div className={classes.formGroup}>
                            <Typography className={classes.inputLabel}>Chi nhánh</Typography>
                            <Select
                                value={branch}
                                onChange={setBranch}
                                displayEmpty
                                size="small"
                                className={classes.fieldSelect}
                                style={{ width: '100%' }}
                                variant="outlined"
                            >
                                <MenuItem value={""}>Chi Nhánh</MenuItem>
                                <MenuItem value={1}>Meo Meo</MenuItem>
                                <MenuItem value={2}>Gâu Gâu</MenuItem>
                            </Select>
                        </div>

                        <div className={classes.formGroup}>
                            <Typography className={classes.inputLabel}>Tên nhân viên</Typography>
                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                placeholder="Nhập tên nhân viên"
                                variant="outlined"
                                type="text"
                                size='small'
                                value={fullname}
                                onChange={setFullname}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <Typography className={classes.inputLabel}>Vai trò</Typography>
                            <Select
                                value={role}
                                onChange={setRole}
                                displayEmpty
                                size="small"
                                className={classes.fieldSelect}
                                style={{ width: '100%' }}
                                variant="outlined"
                            >
                                <MenuItem value={""}>Vai trò</MenuItem>
                                <MenuItem value={0}>Nhân viên</MenuItem>
                                <MenuItem value={1}>Quản lí</MenuItem>
                                <MenuItem value={2}>Thu Ngân</MenuItem>
                                <MenuItem value={3}>Kĩ thuât viên</MenuItem>
                            </Select>
                        </div>
                        <div className={classes.formGroup}>
                            <Typography className={classes.inputLabel}>Số điện thoại</Typography>
                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                placeholder="Nhập số điện thoại"
                                variant="outlined"
                                type="text"
                                size='small'
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                        <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Ảnh sản phẩm </Typography>
                        <div style={{display: 'flex', alignItems:"center", gap: 20, flexWrap: 'wrap'}}>
                            <div className={classes.selectFileBtn}>
                                <span> + </span>
                                <span> Thêm ảnh </span>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    onChange={handleSelectImage}
                                />
                            </div>
                            {
                                avatar && 
                                    <div className={classes.fileSelectedContainer}>
                                        <img src={avatar} alt=""/>
                                        <IconButton 
                                            className={classes.removeSelectedBtn}
                                            onClick={() => handleRemoveSelectedImage()}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                            }
                        </div>
                    </div>

                    </div>
                    <div className={classes.modalFooter}>
                        <Button variant="contained" color="secondary" onClick={() => handleToggleModal(false)}> Hủy </Button>
                        {
                            type === "EDIT" && (<Button variant="contained" color="primary" onClick={handleAddEmployee}> Cập nhật </Button>)
                        }

                        {
                            type === "ADD" && (<Button variant="contained" color="primary" onClick={handleAddEmployee}>Thêm </Button>)
                        }
                        
                    </div>
                </div>
        </div>
    );
}

export default EmployeeModal;
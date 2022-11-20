import React from 'react';
import { Button, FormControlLabel, IconButton, InputAdornment, makeStyles, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core';
import useInput from 'hooks/input.hooks';
import MiniTable from '../../Components/MiniTable';
import CloseIcon from '@material-ui/icons/Close';
import { useLocation } from 'react-router-dom';
import ToCurrency from 'Utils/FormatNumber';


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
        background: 'white',
        marginBottom: 20
    },

    titlePage: {
        fontSize: 20,
        color: "#05b5cb",
        width: '100%',
    },

    formControl: {
        display: 'flex',
        background: 'white',
        height: 'calc(100vh - 180px)',
        overflow: 'scroll',
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
        borderRadius: 8,
    },
    
    formContent: {
        width: '50%',
        background: 'white',
        borderRadius: 10,
        padding: 20, 
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

    selectIngredient: {
        display: 'flex',
        alignItems: "center",
        columnGap: 10,
    },

    fieldSelect: {
        height: 40,
        width: "100%",
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

    bounusMethod: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',
        '& .MuiFormGroup-root': {
            flexDirection: 'row',
        }
    },

    radioValue: {
        display: 'flex',
        flexDirection: 'row',
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

    textarea: {
        width: '100%',
        height: 350,
        borderRadius: 10,
        padding: 10,
        border: 'solid 2px #ddd'
    }


}));


const columns = [
    { id: 'name', label: 'Tên Thuộc tính', minWidth: 170 },
    { id: 'value', label: 'Giá trị', minWidth: 100 },
];

const FORM_TYPE = {
    EDIT: "EDIT",
    ADD: "ADD",
}

function ProductForm() {
    const location = useLocation();
    const { data, type } = location.state;
    const classes = useStyles();
    const { value: name, onChange: setName } = useInput((data && data.name) ? data.name : "");
    const { value: price, onChange: setPrice } = useInput((data && data.newPrice) ? ToCurrency(data.newPrice) : "");
    const { value: amount, onChange: setAmount } = useInput((data && data.amount) ? data.amount : "");
    const { value: productCode, onChange: setProductCode } = useInput((data && data.productCode) ? data.productCode : "");
    const { value: propertyName, onChange: setPropertyName, reset: resetPropertyName } = useInput("");
    const { value: propertyValue, onChange: setPropertyValue, reset: resetPropertyValue} = useInput("");
    const { value: description, onChange: setDescription } = useInput((data && data.description) ? data.description : "");
    const { value: startDate, onChange: setStartDate } = useInput((data && data.startDate) ? data.startDate : "");
    const [images, setImages] = React.useState((data && data.mainImage) ? [{id: 1, src: data.mainImage}] : []);
    const [productPropertiesData, setProductPropertiesData] = React.useState((data && data.properties) ? [...data.properties] : []);

    const handleSelectImage = (e) => {
        const file = e.target.files[0];
        const image = {
            id: Math.round(Math.random()*100),
            src: URL.createObjectURL(file)
        }
        setImages([...images, image]);
    }

    const handleRemoveSelectedImage = (id) => {
        const newArrImage = images.filter(item => item.id !== id);
        setImages([...newArrImage]);
    }

    const handleAddProductProperties = () => {
        if (
            propertyName &&
            propertyValue
        ) {
            const property = {
                id: Math.round(Math.random()*100),
                name: propertyName,
                value: propertyValue
            }
            setProductPropertiesData([...productPropertiesData, property]);
            handleResetMiniForm();
        }
    }

    const handleDeleteIngredient = (id) => {
        const newArr = productPropertiesData.filter(item => item.id !== id);
        setProductPropertiesData([...newArr]);
    }

    const handleResetMiniForm = () => {
        resetPropertyName();
        resetPropertyValue()
    }

    const handleUpdate = () => {
        // call api update here
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.leftContent}>
                    <Typography className={classes.titlePage}> {type === FORM_TYPE.EDIT ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"} </Typography>
                </div>
                <div className={classes.rightContent}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleUpdate}
                    >
                        {type === FORM_TYPE.EDIT ? "Cập Nhật" : "Thêm mới"}
                    </Button>
                </div>
            </div>
            <div className={classes.formControl}>
                <div className={classes.formContent}>
                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Tên liệu trình </Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Nhập tên liệu trình"
                            variant="outlined"
                            size='small'
                            value={name}
                            onChange={setName}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Giá bán </Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Nhập giá trị"
                            variant="outlined"
                            size='small'
                            value={price}
                            onChange={setPrice}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    VNĐ
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Số lượng </Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            type="number"
                            placeholder="Nhập giá trị"
                            variant="outlined"
                            size='small'
                            value={amount}
                            onChange={setAmount}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Ngày bắt đầu bán </Typography>
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
                        <Typography className={classes.inputLabel}> Thuộc tính </Typography>
                        <div className={classes.selectIngredient}>
                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                placeholder="Tên thuộc tính"
                                variant="outlined"
                                type="text"
                                size='small'
                                value={propertyName}
                                onChange={setPropertyName}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                placeholder="Nhập giá trị thuộc tính"
                                variant="outlined"
                                type="text"
                                size='small'
                                value={propertyValue}
                                onChange={setPropertyValue}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            
                            <Button
                                onClick={handleAddProductProperties}
                                variant="contained"
                                color="primary"
                                style={{ minWidth: 150 }}
                            >
                                 + Thêm 
                            </Button>
                        </div>
                    </div>
                    <div className={classes.formGroup} style={{paddingBottom: 10}}>
                        <MiniTable rows={productPropertiesData} columns={columns} hasDeleteBtn onDeleteItem={(id) => handleDeleteIngredient(id)}/>
                    </div>
                </div>
                <div className={classes.formContent}>
                     <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}>Mã vạch</Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Nhập giá trị"
                            variant="outlined"
                            type="text"
                            size='small'
                            value={productCode}
                            onChange={setProductCode}
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
                                
                                images.length > 0 && 
                                images.map((image, index) => (
                                    <div className={classes.fileSelectedContainer} key={index}>
                                        <img src={image.src} alt="selectedImage"/>
                                        <IconButton 
                                            className={classes.removeSelectedBtn}
                                            onClick={() => handleRemoveSelectedImage(image.id)}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Mô tả sản phẩm </Typography>
                        <textarea className={ classes.textarea } placeholder="Nhập mô tả..." defaultValue={description} onChange={setDescription}>
                        </textarea>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProductForm;
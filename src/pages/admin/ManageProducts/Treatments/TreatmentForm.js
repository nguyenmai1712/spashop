import React from 'react';
import { Button, CircularProgress, FormControlLabel, IconButton, InputAdornment, makeStyles, MenuItem, Radio, RadioGroup, Select, Snackbar, TextField, Typography } from '@material-ui/core';
import {
    useInput,
    resizeFile
} from 'hooks/input.hooks';
import MiniTable from '../../Components/MiniTable';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useLocation } from 'react-router-dom';
import { ValidateFunc } from 'Utils/ValidateFunc';
import { Alert } from '@material-ui/lab';
import { treatementService } from 'Services/treatmentService';
import clsx from 'clsx';
import { treatmentCategory } from 'pages/FakeData';


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

    buttonSubmit: {
        width: 120,
        height: 40,
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
        height: 305,
        borderRadius: 10,
        padding: 10,
        border: 'solid 2px #ddd'
    }


}));


const columns = [
    { id: 'name', label: 'Tên Nguyên Liệu', minWidth: 170 },
    { id: 'type', label: 'Phân loại', minWidth: 100 },
    {
      id: 'amount',
      label: 'Số lượng',
      minWidth: 170,
      align: 'right',
    },
];

const bounusMethod = {
    PERCENT: "PERCENT",
    MONEY: "MONEY",
}

const FORM_TYPE = {
    EDIT: "EDIT",
    ADD: "ADD",
}

function TreatmentForm() {
    const location = useLocation();
    const history = useHistory();
    const { data, type } = location.state;
    const classes = useStyles();

    const [isOpenSnackbar, setOpenSnackBar] = React.useState(false);

    const { value: name, onChange: setName } = useInput((data && data.name) ? data.name : "");
    const { value: price, onChange: setPrice } = useInput((data && data.newPrice) ?data.newPrice : "");
    const { value: amount, onChange: setAmount } = useInput((data && data.amount) ? data.amount : "");
    const { value: duration, onChange: setDuration } = useInput((data && data.duration) ? data.duration : "");
    const { value: ingredientValue, onChange: setIngredientValue, reset: resetIngredientValue } = useInput("");
    const { value: typeOfIngredient, onChange: setTypeOfIngredient, reset: resetTypeOfIngredient} = useInput("");
    const { value: amountOfIngredient, onChange: setAmountOfIngredient, reset: resetAmountOfIngredient} = useInput("");
    const { value: description, onChange: setDescription } = useInput((data && data.description) ? data.description : "");
    const { value: startDate, onChange: setStartDate } = useInput((data && data.startDate) ? data.startDate : "");
    const {value: bounusValue, onChange: setBounusValue} = useInput((data && data.bounus) ? data.bounus.value : "");
    const {value: category, onChange: setCategory} = useInput((data && data.category) ? data.category : "");
    const [bounusType, setBounusType] = React.useState((data && data.bounus) ? data.bounus.type : "");
    const [images, setImages] = React.useState((data && data.mainImage) ? [{id: 1, src: data.mainImage.src}] : []);
    const [ingredientData, setIngredientData] = React.useState((data && data.ingredient) ? [...data.ingredient]: []);
    const [ isFetching, setFetching ] = React.useState(false);

    const handleRadioChange = (event) => {
        setBounusType(event.target.value);
    };

    const handleNavigate = (link) => {
        history.push(link);
    }

    const handleSelectImage = async (e) => {
        const file = e.target.files[0];
        const base64Value = await resizeFile(file);
        const image = {
            id: Math.round(Math.random()*100),
            src: base64Value,
        }
        setImages([...images, image]);
    }

    const handleRemoveSelectedImage = (id) => {
        const newArrImage = images.filter(item => item.id !== id);
        setImages([...newArrImage]);
    }

    const handleAddIngredient = () => {
        if (
            ingredientValue &&
            typeOfIngredient &&
            amountOfIngredient > 0
        ) {
            const ingredient = {
                id: Math.round(Math.random()*100),
                name: ingredientValue,
                type: typeOfIngredient,
                amount: amountOfIngredient,
            }
            setIngredientData([...ingredientData, ingredient]);
            handleResetMiniForm();
        }
    }

    const handleDeleteIngredient = (id) => {
        const newArr = ingredientData.filter(item => item.id !== id);
        setIngredientData([...newArr]);
    }

    const handleResetMiniForm = () => {
        resetIngredientValue();
        resetTypeOfIngredient()
        resetAmountOfIngredient();
    }

    const handleSubmit = async (type) => {
        switch (type) {
            case FORM_TYPE.ADD:
                if (
                    ValidateFunc.notEmpty(name) &&
                    ValidateFunc.isNumber(price) &&
                    ValidateFunc.isNumber(amount) &&
                    ValidateFunc.isNumber(duration) && 
                    ValidateFunc.notEmpty(startDate) &&
                    ingredientData &&
                    bounusType &&
                    bounusValue &&
                    category
                ) {
                    const newTreatment = {
                        name: name,
                        oldPrice: price,
                        newPrice: price,
                        description: description,
                        mainImage: images[0],
                        extraImage1:  images[1],
                        extraImage2:  images[2],
                        extraImage3:  images[3],
                        view: 1,
                        color: ["red", "blue", "white", "black"],
                        amount: 10,
                        rating: 4,
                        category: category,
                        status: ["On sale"],
                        tags: ["Blushers", "Creams"],
                        duration: duration,
                        ingredient: ingredientData,
                        bounus: {
                            type: bounusType,
                            value: bounusValue,
                        }
                    }

                    try {
                        setFetching(true);
                        const response = await treatementService.addTreatment(newTreatment);
                        if (response && response.status >= 200 && response.status < 300) {
                            setFetching(false)
                            handleNavigate('/admin/manage-products/treatments');
                        }
                    } catch (error) {
                        setFetching(false);
                        alert("Thêm liệu trình lỗi !")
                    }
                } else {
                    setOpenSnackBar(true);
                }
                break;
            case FORM_TYPE.EDIT:
                const newTreatment = {
                    ...data,
                    name: name,
                    oldPrice: price,
                    newPrice: price,
                    description: description,
                    mainImage: images[0],
                    extraImage1:  images[1],
                    extraImage2:  images[2],
                    extraImage3:  images[3],
                    view: 1,
                    color: ["red", "blue", "white", "black"],
                    amount: 10,
                    rating: 4,
                    category: category,
                    status: ["On sale"],
                    tags: ["Blushers", "Creams"],
                    duration: duration,
                    ingredient: ingredientData,
                    bounus: {
                        type: bounusType,
                        value: bounusValue,
                    }
                };

                try {
                    setFetching(true);
                    const response = await treatementService.updateTreatment(newTreatment);
                    if (response && response.status >= 200 && response.status < 300) {
                        setFetching(false);
                        handleNavigate('/admin/manage-products/treatments');
                    }
                } catch (error) {
                    setFetching(false);
                    alert("Thêm liệu trình lỗi !")
                }
                break;
            default:
                return;
        };
        
    }

    return (
        <div className={classes.container}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isOpenSnackbar}
                onClose={() => setOpenSnackBar(false)}
            >
                <Alert severity="error">Vui lòng điền đầy đủ các thông tin!</Alert>
            </Snackbar>
            <div className={classes.header}>
                <div className={classes.leftContent}>
                    <Typography className={classes.titlePage}> {type === FORM_TYPE.EDIT ? "Chỉnh sửa liệu trình" : "Thêm mới liệu trình"} </Typography>
                </div>
                <div className={classes.rightContent}>
                    {
                        !isFetching ? (
                            <Button
                                className={classes.buttonSubmit}
                                variant="contained"
                                color="secondary"
                                onClick={() => handleSubmit(type)}
                            >
                                {type === FORM_TYPE.EDIT ? "Cập Nhật" : "Thêm mới"}
                            </Button>
                        ) : (
                            <Button
                                className={classes.buttonSubmit}
                                variant="contained"
                                color="secondary"
                            >
                                <CircularProgress size={24}/>
                            </Button>
                        )
                    }
                    
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
                        <Typography className={classes.inputLabel}> Giá bán / Buổi làm</Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Nhập giá trị"
                            variant="outlined"
                            size='small'
                            type="text"
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
                        <Typography className={classes.inputLabel}> Số buổi tối thiểu </Typography>
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
                            value={startDate ? new Date(startDate).toISOString().slice(0, 16) : startDate}
                            onChange={setStartDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}>Thời lượng</Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Nhập giá trị"
                            variant="outlined"
                            type="number"
                            size='small'
                            value={duration}
                            onChange={setDuration}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Nguyên liệu</Typography>
                        <div className={classes.selectIngredient}>
                            <Select
                                value={ingredientValue}
                                onChange={setIngredientValue}
                                displayEmpty
                                size="small"
                                className={classes.fieldSelect}
                                variant="outlined"
                            >
                                <MenuItem value={""}>Nguyên liệu</MenuItem>
                                <MenuItem value={"Serum"}>Serum</MenuItem>
                                <MenuItem value={"Kem Chống nắng"}>Kem Chống nắng</MenuItem>
                                <MenuItem value={"Toner"}>Toner</MenuItem>
                            </Select>

                            <Select
                                value={typeOfIngredient}
                                onChange={setTypeOfIngredient}
                                displayEmpty
                                size="small"
                                className={classes.fieldSelect}
                                variant="outlined"
                            >
                                <MenuItem value={""}>Phân loại </MenuItem>
                                <MenuItem value={"500ml"}>500ml</MenuItem>
                                <MenuItem value={"10ml"}>10ml</MenuItem>
                                <MenuItem value={"30ml"}>30ml</MenuItem>
                            </Select>

                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                placeholder="Nhập số lượng"
                                variant="outlined"
                                type="number"
                                size='small'
                                value={amountOfIngredient}
                                onChange={setAmountOfIngredient}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            
                            <Button
                                onClick={handleAddIngredient}
                                variant="contained"
                                color="primary"
                                style={{ minWidth: 150 }}
                            >
                                 + Thêm 
                            </Button>
                        </div>
                    </div>
                    <div className={classes.formGroup} style={{paddingBottom: 10}}>
                        <MiniTable rows={ingredientData} columns={columns} hasDeleteBtn onDeleteItem={(id) => handleDeleteIngredient(id)}/>
                    </div>
                </div>
                <div className={classes.formContent}>
                    <div className={classes.formGroup}>
                        <Typography className={classes.inputLabel}> Phương thức tính thù lao </Typography>
                        <div className={classes.bounusMethod}>
                            <RadioGroup value={bounusType} onChange={handleRadioChange} className={classes.radioGroup}>
                                <FormControlLabel value={ bounusMethod.PERCENT } control={<Radio />} label="% dịch vụ" />
                                <FormControlLabel value={ bounusMethod.MONEY } control={<Radio />} label="Số tiền cố định" />
                            </RadioGroup>
                            <div>
                                {
                                    bounusType === bounusMethod.PERCENT  ? (
                                        <div className={classes.formGroup}>
                                            <Typography className={classes.inputLabel}> % dịch vụ</Typography>
                                            <TextField
                                                className={classes.inputfield}
                                                id="standard-textarea"
                                                placeholder="Nhập giá trị"
                                                variant="outlined"
                                                size='small'
                                                value={bounusValue}
                                                onChange={setBounusValue}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        %
                                                    </InputAdornment>
                                                    ),
                                                 }}
                                            />
                                        </div>
                                    ) : (
                                        <div className={classes.formGroup}>
                                            <Typography className={classes.inputLabel}> Giá trị</Typography>
                                            <TextField
                                                className={classes.inputfield}
                                                id="standard-textarea"
                                                placeholder="Nhập giá trị"
                                                variant="outlined"
                                                size='small'
                                                value={bounusValue}
                                                onChange={setBounusValue}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        VNĐ
                                                    </InputAdornment>
                                                    ),
                                                 }}
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
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
                        <Typography className={classes.inputLabel}> Chọn danh mục </Typography>
                        <Select
                            value={category}
                            onChange={setCategory}
                            displayEmpty
                            size="small"
                            className={clsx(classes.fieldSelect, classes.selectCategory)}
                            variant="outlined"
                        >
                            <MenuItem value="">Danh mục</MenuItem>
                            {
                                    treatmentCategory.map(item => (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    ))
                                }
                        </Select>
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

export default TreatmentForm;
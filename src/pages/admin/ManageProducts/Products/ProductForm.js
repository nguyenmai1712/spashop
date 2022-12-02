import {
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    makeStyles,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
import useInput, { resizeFile } from 'hooks/input.hooks';
import { productCategory } from 'pages/FakeData';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { productService } from 'Services/productService';
import { ValidateFunc } from 'Utils/ValidateFunc';

import MiniTable from '../../Components/MiniTable';


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

    buttonSubmit: {
      width: 120,
      height: 40,  
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
    const history = useHistory();
    const { data, type } = location.state;
    const classes = useStyles();
    
    const { value: name, onChange: setName } = useInput((data && data.name) ? data.name : "");
    const { value: price, onChange: setPrice } = useInput((data && data.newPrice) ? data.newPrice: "");
    const { value: amount, onChange: setAmount } = useInput((data && data.amount) ? data.amount : "");
    const { value: productCode, onChange: setProductCode } = useInput((data && data.productCode) ? data.productCode : "");
    const { value: propertyName, onChange: setPropertyName, reset: resetPropertyName } = useInput("");
    const { value: propertyValue, onChange: setPropertyValue, reset: resetPropertyValue} = useInput("");
    const { value: description, onChange: setDescription } = useInput((data && data.description) ? data.description : "");
    const { value: category, onChange: setCategory } = useInput((data && data.category) ? data.category : "");

    const [images, setImages] = React.useState((data && data.mainImage) ? [data.mainImage] : []);
    const [productPropertiesData, setProductPropertiesData] = React.useState((data && data.properties) ? [...data.properties] : []);
    const [ isOpenSnackbar, setOpenSnackBar ] = React.useState(false);
    const [ isFetching, setFetching ] = React.useState(false);

    const handleSelectImage = async (e) => {
        const file = e.target.files[0];
        const base64Value = await resizeFile(file);
        const image = {
            id: Math.round(Math.random()*100),
            src: base64Value, 
        }
        setImages([...images, image]);
    }

    const handleNavigate = (link) => {
        history.push(link);
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

    const handleSubmit = async (type) => {
       switch (type) {
            case FORM_TYPE.ADD:
                if (
                    name &&
                    ValidateFunc.isNumber(price) &&
                    amount > 0 &&
                    category &&
                    productPropertiesData &&
                    productCode &&
                    description
                ) {
                    const newProduct = {
                        name,
                        oldPrice: price,
                        newPrice: price,
                        description,
                        mainImage: images[0],
                        extraImage1: images[1],
                        extraImage2: images[2],
                        extraImage3: images[3],
                        view: 1,
                        color: ["red", "blue", "white", "black"],
                        amount: amount,
                        rating: 5,
                        category: category,
                        status: ["On sale"],
                        tags: ["Blushers", "Creams"],
                        startDate: new Date().toISOString().slice(0, 16),
                        properties: productPropertiesData,
                        productCode,
                    }
                    
                    try {
                        setFetching(true);
                        const response = await productService.addProduct(newProduct);
                        if (response) {
                            setFetching(false);
                            handleNavigate("/admin/manage-products/products")
                        }
                    } catch (error) {
                        setFetching(false);
                        throw new Error(error.message)
                    }
                } else {
                    setOpenSnackBar(true);
                }
                break;
            case FORM_TYPE.EDIT:
                const newProduct = {
                    ...data,
                    name,
                    oldPrice: price,
                    newPrice: price,
                    description,
                    mainImage: images[0],
                    extraImage1: images[1],
                    extraImage2: images[2],
                    extraImage3: images[3],
                    view: 1,
                    color: ["red", "blue", "white", "black"],
                    amount: amount,
                    rating: 5,
                    category: category,
                    status: ["On sale"],
                    tags: ["Blushers", "Creams"],
                    startDate: new Date().toISOString().slice(0, 16),
                    properties: productPropertiesData,
                    productCode,
                }
                
                try {
                    setFetching(true);
                    const response = await productService.updateProduct(newProduct);
                    if (response) {
                        setFetching(false);
                        handleNavigate("/admin/manage-products/products")
                    }
                } catch (error) {
                    setFetching(false);
                    throw new Error(error.message)
                }
                break;
            default:
                return;
       }
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
                    <Typography className={classes.titlePage}> {type === FORM_TYPE.EDIT ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"} </Typography>
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
                        <Typography className={classes.inputLabel}> Tên sản phẩm </Typography>
                        <TextField
                            className={classes.inputfield}
                            id="standard-textarea"
                            placeholder="Nhập tên sản phẩm"
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
                        <Typography className={classes.inputLabel}> Danh mục </Typography>
                        <Select
                            value={category}
                            onChange={setCategory}
                            displayEmpty
                            size="small"
                            className={clsx(classes.fieldSelect, classes.selectCategory)}
                            variant="outlined"
                        >
                            <MenuItem value={""}>Danh mục</MenuItem>
                            {
                                productCategory.map(item => <MenuItem value={item}> {item} </MenuItem>)
                            }
                        </Select>
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
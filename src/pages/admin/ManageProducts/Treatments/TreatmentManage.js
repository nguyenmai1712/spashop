import {
    Avatar, Button, Chip,
    InputAdornment, makeStyles,
    MenuItem, Select, TextField
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Rating } from '@material-ui/lab';
import clsx from 'clsx';
import useInput from 'hooks/input.hooks';
import React from 'react';
import { useHistory } from 'react-router-dom';
import DataTable from '../../Components/DataTable';
import { treatementService } from 'Services/treatmentService';
import { useEffect } from 'react';
import { OK } from 'constant';
import LoadingComponent from 'components/LoadingComponent';
import { treatmentCategory } from 'pages/FakeData';
import ToCurrency from 'Utils/FormatNumber';

const DATA_TABLE_TYPE = "TREATMENT";

const columns = [
    {
        id: 'id',
        label: 'Mã SP',
        minWidth: 50,
        align: "center",
    },

    {
        id: 'mainImage',
        label: 'Ảnh Liệu trình',
        minWidth: 50,
        align: "center",
        format: (value) => <Avatar src={value.src} alt="" variant="rounded" />
    },

    {
        id: 'name',
        label: 'Tên liệu trình',
        minWidth: 150,
        align: 'left',
        format: (value) => value.toLowerCase(),
    },
    {
        id: 'amount',
        label: 'Số lượng',
        minWidth: 50,
        align: 'center',
    },
    {
        id: 'oldPrice',
        label: 'Giá cũ',
        minWidth: 70,
        align: 'left',
        format: (value) => ToCurrency(value) + "đ",
    },

    {
        id: 'newPrice',
        label: 'Giá mới',
        minWidth: 70,
        align: 'left',
        format: (value) => ToCurrency(value) + "đ",
    },

    {
        id: 'category',
        label: 'Danh mục',
        minWidth: 250,
        align: 'left',
    },

    {
        id: 'rating',
        label: 'Đánh giá',
        minWidth: 100,
        align: 'center',
        format: (value) => (
            <Rating
                readOnly={true}
                name="customized-empty"
                defaultValue={value}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
        )
    },

    {
        id: 'description',
        label: 'Mô tả sản phẩm',
        align: 'left',
        format: (value) => value.slice(0, 100),
    },

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
        width: 150,
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
    }

}));

function TreatmentManage(props) {
    const classes = useStyles();
    // const { value: branch, onChange: setBranch } = useInput("");
    const { value: category, onChange: setCategory } = useInput("");
    const { value: searchValue, onChange: setSearchValue } = useInput();
    const [ originData, setOriginData ] = React.useState([]);
    const [dataTable, setDataTable] = React.useState([]);
    const [isFetching, setFetching] = React.useState(false);
    
    const history = useHistory();

    const handleNavigate = (link, data = null) => {
        history.push({
            pathname: link,
            state: { data, type: "ADD" }
        })
    }

    const handleGetTreatments = async () => {
        try {
            setFetching(true);
            const response = await treatementService.getTreatments();
            if (response && response.status === OK) {
                setDataTable(response.data);
                setOriginData(response.data);
                setTimeout(() => {
                    setFetching(false);
                }, 1500)
            }
        } catch (error) {
            setFetching(false);
            throw new Error(error.message);
        }

    }

    const handleFilter = (searchValue, categoryValue, data) => {
        if (!categoryValue) {
            const result = data.filter(item => item.name.toLowerCase().includes(searchValue));
            setDataTable(result);
        } else if (searchValue && categoryValue) {
            const result = data.filter(item => (
                item.name.toLowerCase().includes(searchValue) &&
                item.category ===  categoryValue
            ));
            setDataTable(result);
        } else if (!searchValue && categoryValue) {
            const result = data.filter(item => (
                item.category ===  categoryValue
            ));
            setDataTable(result);
        } else {
            setDataTable(data);
        }
    }

    const handleDeleteTreatment = async (id) => {
        try {
            setFetching(true);
            const response = await treatementService.deleteTreatmentById(id);
            if (response && response.status === OK) {
                handleGetTreatments();
                setTimeout(() => {
                    setFetching(false);
                }, 1500);
            }
        } catch (error) {
            setFetching(false);
            throw new Error(error.message);
        }
    }

    useEffect(() => {
        handleGetTreatments();
    },[])

    useEffect(() => {
        handleFilter(searchValue, category, originData);
    }, [searchValue, category]);

    return (
        <div>
            {isFetching && <LoadingComponent />}
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.leftContent}>
                        <div className={classes.filterGroup}>
                            <TextField
                                className={classes.inputfield}
                                id="standard-textarea"
                                label="Tìm kiếm"
                                placeholder="Nhập tên liệu trình"
                                variant="outlined"
                                size='small'
                                value={searchValue}
                                onChange={setSearchValue}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* <Select
                                value={branch}
                                onChange={setBranch}
                                displayEmpty
                                size="small"
                                className={classes.fieldSelect}
                                variant="outlined"
                            >
                                <MenuItem value={""}>Chi Nhánh</MenuItem>
                                <MenuItem value={1}>Meo Meo</MenuItem>
                                <MenuItem value={2}>Gâu Gâu</MenuItem>
                            </Select> */}

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
                    </div>
                    <div className={classes.rightContent}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleNavigate("/admin/treatment-add")}
                        > Thêm Liệu trình </Button>
                    </div>
                </div>
            </div>
            <div className={classes.tableContent}>
                <DataTable
                    height='calc(100vh - 250px)'
                    data={dataTable}
                    isFetching={isFetching}
                    columns={columns}
                    type={DATA_TABLE_TYPE}
                    hasMoreTools
                    onDelete={(id) => handleDeleteTreatment(id)}
                />
            </div>
        </div>
    );
}

export default TreatmentManage;
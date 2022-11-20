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
import { productsData } from 'pages/FakeData';
import React from 'react';
import { useHistory } from 'react-router-dom';
import DataTable from '../../Components/DataTable';

const DATA_TABLE_TYPE = "PRODUCT";

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
      format: (value) => <Avatar src={value} alt="" variant="rounded"/>
    },
  
    {
      id: 'name',
      label: 'Tên sản phẩm',
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
    },
  
    {
      id: 'newPrice',
      label: 'Giá mới',
      minWidth: 70,
      align: 'left',
    },
  
    {
      id: 'category',
      label: 'Danh mục',
      minWidth: 250,
      align: 'left',
      format: (value) => {
        return value && value.map(item => <Chip label={item} style={{margin: 2}}/>)
      }
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
      format: (value) => value.slice(0,100),
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

function ProductManage(props) {
    const classes = useStyles();
    const { value: branch, onChange: setBranch } = useInput("");
    const { value: category, onChange: setCategory } = useInput("");
    const [ dataTable, setDataTable ] =React.useState(productsData);
    const history = useHistory();

    const handleNavigate = (link, data=null) => {
      history.push({
        pathname: link,
        state: {data}
      })
    }

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
                                placeholder="Nhập tên sản phẩm"
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
                            </Select>

                            <Select
                                value={category}
                                onChange={setCategory}
                                displayEmpty
                                size="small"
                                className={clsx(classes.fieldSelect, classes.selectCategory)}
                                variant="outlined"
                            >
                                <MenuItem value={""}>Danh mục</MenuItem>
                                <MenuItem value={1}>Chăm sóc da mặt</MenuItem>
                                <MenuItem value={2}>Trị mụn</MenuItem>
                                <MenuItem value={2}>Body Care</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className={classes.rightContent}>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleNavigate("/admin/product-add")}
                        > Thêm sản phẩm </Button>
                    </div>
                </div>
            </div>
            <div className={classes.tableContent}>
                <DataTable
                    height='calc(100vh - 250px)'
                    data={dataTable}
                    columns={columns}
                    type={DATA_TABLE_TYPE}
                    hasMoreTools
                />
            </div>
        </div>
    );
}

export default ProductManage;
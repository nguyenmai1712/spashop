import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ToCurrency from 'Utils/FormatNumber';
  
const FORM_TYPE = {
    EDIT: 'EDIT',
    ADD: 'ADD'
  }

const useStyles = makeStyles(() => ({
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

    headerTitle: {
        fontSize: 20,
        color: "#05b5cb",
    },

    productDetailContent: {
        marginTop: 30,
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
        height: 'calc(100vh - 200px)',
        padding: 14, 
        overflow: 'scroll',
        background: 'white',
    },

    detailInfor: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
    },

    imageProduct: {
        width: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&>img': {
            borderRadius: 10,
            with: 300,
            height: 300,
        }
    },

    productInfor: {
        width: '50%',
    },

    inforTitle: {
        fontSize: 24,
        color: '#6e78ff',
        marginBottom: 20,
    },

    inforItem: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        columnGap: 10,
        marginBottom: 8,
        fontSize: 18,
    },
    
    label: {
        minWidth: 150,
        color: "#65cbe9"
    },

    groupTable: {
        marginTop: 10,
        display: 'flex',
        columnGap: 30,
    },
    
    tableItem: {
        width: '50%',
    }

}))

function ProductDetailAdmin(props) {
    const history = useHistory();
    const classes = useStyles();
    const location = useLocation();
    const { data: productData } = location.state;

    const handleNavigateEdit = () => {
        history.push({
            pathname: `/admin/product-edit/${productData.id}`,
            state: { data: productData, type: FORM_TYPE.EDIT},
          });
    }

    return (
        <div>
            <div>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.leftContent}>
                        <Typography className={classes.headerTitle}> Chi tiết Liệu trình</Typography>
                    </div>
                    <div className={classes.rightContent}>
                        <Button variant="contained" color="secondary" onClick={handleNavigateEdit}> Chỉnh sửa </Button>
                    </div>
                </div>
            </div>
            <div className={classes.productDetailContent}>
                <div className={classes.detailInfor}>
                    <div className={classes.imageProduct}>
                        <img src={productData.mainImage.src} alt=""/>
                    </div>
                    <div className={classes.productInfor}>
                        <Typography className={classes.inforTitle}>Chi tiết sản phẩm/Dịch vụ</Typography>
                        <div className={classes.inforItem}>
                            <span className={classes.label}>Tên sản phẩm:</span>
                            <span className={classes.information}>{productData.name} </span>
                        </div> 

                        <div className={classes.inforItem}>
                            <span className={classes.label}>Dánh giá</span>
                            <Rating
                                readOnly={true}
                                name="customized-empty"
                                defaultValue={productData.rating}
                                precision={0.5}
                                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            />
                        </div> 

                        <div className={classes.inforItem}>
                            <span className={classes.label}> Tình Trạng: </span>
                            <span className={classes.information}>{productData.status} </span>
                        </div>

                        <div className={classes.inforItem}>
                            <span className={classes.label}> Thuộc tính: </span>
                            <span className={classes.information}>
                                {
                                    productData.properties.map(item => <span className={classes.information}>{item.name} {item.value},</span>)
                                }
                            </span>
                        </div>

                        <div className={classes.inforItem}>
                            <span className={classes.label}>Danh mục:</span>
                            <span className={classes.information}>{productData.category} </span>
                        </div>

                        <div className={classes.inforItem}>
                            <span className={classes.label}> Giá bán: </span>
                            <span className={classes.information}>{ToCurrency(productData.newPrice)} </span>
                        </div>

                        <div className={classes.inforItem}>
                            <span className={classes.label}> Mô tả spản phẩm: </span>
                            <span className={classes.information}>{productData.description} </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetailAdmin;
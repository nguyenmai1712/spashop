import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import spaIcon from 'assets/icons/spa_logo.png';
import ItemProductRecomend from 'components/ItemProductRecommend';
import MenuComponent from 'components/MenuComponent';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    background: 'white',
    marginTop: 20,
    padding: '0px 20px 20px 20px',
  },
  branch: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  branchName: {
    fontSize: 17,
    fontWeight: 400,
    color: 'black',
    fontFamily: 'Orbitron',
    marginLeft: 10,
  },
  textFooter: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: 'black',
    fontWeight: 500,
    marginBottom: 10,
  },
  recommendProducts: {
    width: '70%',
  },
}))

const footerMenuData = [
  {
    id: 1,
    label: 'Chính sách bảo mật',
    link: '/privicy-policy',
    subMenu: [],
  },
  {
    id: 2,
    label: 'Chính sách hoàn tiền',
    link: '/refund-policy',
    subMenu: [],
  },
  {
    id: 3,
    label: 'Điều khoản & điều kiện',
    link: '/term-and-conditions',
    subMenu: [],
  },
];


function Footer({ location, popularData }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          style={{ borderBottom: 'solid 0.5px #d5d3d3', marginBottom: 20 }}
        >
          <MenuComponent data={footerMenuData} location={location} />
        </Grid>

        <Grid container item xs={12}>
          {/* 1/2 footer1 */}
          <Grid container item xs={12} sm={6} md={6} lg={6} spacing={2}>
            {/* 1/4 footer */}
            <Grid container item xs={12}>
              {/* 1/8 footer */}
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12} className={classes.branch}>
                  <Avatar variant='square' src={spaIcon}></Avatar>
                  <Typography className={classes.branchName}> Smile Spa </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.textFooter}>
                    Smile Spa luôn nỗ lực không ngừng <br />
                    để đem đến cho khách hàng những dịch vụ <br/>
                    những sản phẩm hoàn hảo nhất.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Cửa hàng của chúng tôi
                  </Typography>
                  <Typography className={classes.textFooter}>Các chi nhánh khác</Typography>
                  <Typography className={classes.textFooter}>Nhận nhượng quyền thương mại</Typography>
                  <Typography className={classes.textFooter}> Ưu đãi theo lịch trình </Typography>
                  <Typography className={classes.textFooter}>Xem thêm</Typography>
                </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              {/* 1/8 footer */}
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Kết nối với chúng tôi
                  </Typography>
                  <Typography className={classes.textFooter}>Facebook</Typography>
                  <Typography className={classes.textFooter}>Twitter</Typography>
                  <Typography className={classes.textFooter}>Instagram</Typography>
                  <Typography className={classes.textFooter}>Whatsapp</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={6} md={6} lg={6}>
            {/* 1/4 footer */}
            <Grid container item xs={12} sm={6} md={6} lg={6}>
              {/* 1/8 footer */}
              <div className={classes.recommendProducts}>
                <Typography className={classes.subTitle}> Sản phẩm</Typography>
                {
                  popularData.slice(0, 4).map(item => (
                    <ItemProductRecomend item={item} key={item.id}/>
                  ))
                }
              </div>
            </Grid>
            <Grid container item xs={12} sm={6} md={6} lg={6} spacing={2}>
              {/* 1/8 footer */}
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Chi tiết liên hệ
                  </Typography>
                  <Typography className={classes.textFooter}>
                    Địa chỉ: 319 Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội
                  </Typography>
                  <Typography className={classes.textFooter}>Contact : 304-559-3023</Typography>
                  <Typography className={classes.textFooter}>Số điện thoại: 037 393 2917</Typography>
                  <Typography className={classes.textFooter}>E-mail : smilespa@store.com</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
              <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Cửa hàng offline
                  </Typography>
                  <Typography className={classes.textFooter}>09 - Hùng Vương - Hà Nội</Typography>
                  <Typography className={classes.textFooter}>07 - Xuân Diệu - Đà Nẵng</Typography>
                  <Typography className={classes.textFooter}>Đường số 6, Cityland Park Hills, P.10, Q. Gò Vấp</Typography>
                  <Typography className={classes.textFooter}>245 Quang Trung - Nha trang</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Grid 
          container item xs={12}
          justifyContent="center"
          alignItems="center"
          style={{
            borderTop: 'solid 0.5px #d5d3d3',
            paddingTop: 20,
            marginTop: 10,
          }}
        >
          <Typography className={classes.textFooter}>© 2022 Smile Spa Coding by Mai Mai</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;
import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import ColumnChart from './ColumnChart';
import TopVisitedProducts from './TopVisitedProducts';
import TopVisitedCategory from './TopVisitedCategory';
import StatisticsCard from 'components/StatisticsCard';

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
  },
  mainTitle: {
    marginTop: theme.spacing(2),
    fontSize: "40px",
    fontWeight: 700,
    fontFamily: "Poppins",
    color: "grey",
    textShadow: "1px 3px 5px rgba(0, 0, 0, 0.3)",
  },
  containerCard: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headpaper: {
    position: 'relative',
    padding: theme.spacing(2),
    width: '100%',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  flexItem: {
    width: '19%',
  },

  chartTitle: {
    padding: theme.spacing(2),
    fontSize: '18px',
    fontWeight: 700,
    width: '100%',
    textAlign: 'left',
  },

  chart: {
    position: 'relative',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  chartContainer: {
    marginTop: theme.spacing(3),
  },

}));

const overViewData = [
  {
    id: 1,
    label: 'Doanh thu tháng này',
    data: {
      value: 150023402,
      type: 'vnd',
    },
    rate: {
      percent: 12,
      total: 'increase',
    },
  },
  {
    id: 2,
    label: 'Tổng số lượng khách hàng',
    data: {
      value: 4399,
      type: '',
    },
    rate: {
      percent: 12,
      total: 'decrease',
    },
  },
  {
    id: 3,
    label: 'Tổng số lượt giao dịch',
    data: {
      value: 152475,
      type: '',
    },
    rate: {
      percent: 12,
      total: 'decrease',
    },
  },
  {
    id: 4,
    label: 'Tổng số sản phẩm & liệu trình được bán',
    data: {
      value: 362545,
      type: '',
    },
    rate: {
      percent: 12,
      total: 'increase',
    },
  },
  {
    id: 5,
    label: 'Lợi nhuận',
    data: {
      value: 70128321,
      type: 'vnd',
    },
    rate: {
      percent: 12,
      total: 'increase',
    },
  },
];

const totalRevenueData = [
  3.5, 5.6, 4.7, 5.2, 3.9, 8.8, 7.6, 4.5, 3.5, 5.6, 4.7, 5.2, 3.9, 8.8,
];

function Report() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item className={classes.mainTitle}>
          Báo cáo
        </Grid>
      </Grid>

      <Grid container className={classes.containerCard}>
        {
          overViewData.map((item) => (
            <Grid item key={item.id} className={classes.flexItem}>
              <Paper className={classes.headpaper}>
                <StatisticsCard
                  title={item.label}
                  value={item.data.value}
                  rate={item.rate.percent}
                  type={item.data.type}
                  total={item.rate.total}
                  icon={item.icon}
                />
              </Paper>
            </Grid>
          ))
        }
      </Grid>

      <div className={classes.chartContainer}>
        <Grid container spacing={2} style={{ marginBottom: 10 }}>
          <Grid item sm={12} md={12} lg={12}>
            <Paper className={classes.chart}>
              <ColumnChart data={totalRevenueData} title="Thống kê doanh thu theo tháng" columnColor="#00B4D8" />
            </Paper>
          </Grid>

          <Grid 
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item sm={12} md={6} lg={6}>
              <Paper className={classes.chart}>
                <TopVisitedProducts />
              </Paper> 
            </Grid>

            <Grid item sm={12} md={6} lg={6}>
              <Paper className={classes.chart}>
                <TopVisitedCategory />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Report;
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts from 'highcharts/highstock';
import React from 'react';

HighchartsMore(Highcharts);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    color: theme.palette.text.secondary,
    minHeight: 400,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    borderBottom: '1px solid #F1F5F9',
    padding: theme.spacing(0, 2),
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1E293B',
  },

  content: {
    padding: theme.spacing(0, 2, 2, 2),
  },
}));

function ColumnChart({ title, data, columnColor }) {
  const classes = useStyles();
  const optionsCloumnrageChart = {
    chart: {
      type: 'column',
      // height: 500,
      marginTop: 50,
    },
    title: '',
    xAxis: {
      categories: [
        '01/05',
        '03/05',
        '05/05',
        '07/5',
        '09/05',
        '11/05',
        '13/05',
        '15/05',
        '17/05',
        '21/05',
        '23/05',
        '25/05',
        '27/05',
        '31/05',
      ],
      crosshair: true,
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      labels: {
        formatter() {
          const that = this;
          return that.value;
        },
      },
      min: 0,
      title: {
        text: 'VND (Triệu)',
        align: 'high',
        offset: 0,
        rotation: 0,
        y: -20,
        x: 50,
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: '<b>{point.y} VND(Triệu)</b>',
    },
    plotOptions: {
      column: {
        color: columnColor,
      },
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
    series: [{
      name: 'Population',
      data,
      dataLabels: {
        enabled: true,
        rotation: 0,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        // y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    }],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className={classes.paper}>
      <div cotainer className={classes.header}>
        <Typography className={classes.title}>
          {title}
        </Typography>
      </div>
      <div className={classes.content}>
        <Grid>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsCloumnrageChart}
          />
        </Grid>
      </div>
    </div>
  );
}

export default ColumnChart;

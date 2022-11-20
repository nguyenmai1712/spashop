import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Typography, makeStyles, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ToCurrency from 'Utils/FormatNumber';

const useStyles = makeStyles({
  title: {
    color: '#797979',
    fontSize: 14,
    fontWeight: 400,
  },
  increaseBtn: {
    fontSize: 12,
    textAlign: 'left',
    border: '1px solid #27AE60',
    backgroundColor: 'rgba(39, 174, 96, 0.1)',
    color: '#27AE60',
    alignItems: 'center',
    padding: 0,
    '&:hover': {
      backgroundColor: 'rgba(39, 174, 96, 0.1)',
    },
  },
  decreaseBtn: {
    fontSize: 12,
    border: '1px solid #F43F5E4D',
    backgroundColor: '#FFE9ED',
    color: '#F43F5E',
    alignItems: 'center',
    padding: 0,
    '&:hover': {
      backgroundColor: 'rgba(39, 174, 96, 0.1)',
    },
  },
});

function StatisticsCard(props) {
  const {
    title, value, rate, type, total,
  } = props;

  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title}>{title}</Typography>
      <Value>
        {type && type === 'percent' && value}
        {
          type && type === 'time'
            && (`${new Date(value).getHours()}h ${new Date(value).getMinutes()}m`)
        }
        {
          ((type && type === 'vnd')
          || (!type))
          && ToCurrency(value)
        }
        {
          type && type === 'vnd'
          && <VndType> VNĐ </VndType>
        }
        {
          type && type === 'percent'
          && <span>%</span>
        }
      </Value>
      <Button
        className={
          total && total === 'increase' ? classes.increaseBtn : classes.decreaseBtn
        }
      >
        <Icon>
          {total && total === 'increase' ? <ArrowUpwardIcon style={{ color: '#27AE60', fontSize: '18px' }} /> : <ArrowDownwardIcon style={{ color: '#F43F5E', fontSize: '18px' }} />}
        </Icon>
        {`${rate}%`}
      </Button>
    </Container>
  );
}

StatisticsCard.defaultProps = {
  type: null,
  total: null,
};

StatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  type: PropTypes.string,
  total: PropTypes.string,
};

export default StatisticsCard;

const Container = styled.div`
  position: 'relative';
  color: #000000;
  text-align: left;
`;

const Value = styled.p`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const VndType = styled.span`
  font-size: 16px;
  color: #8D9297;
  font-weight: 400;
  position: absolute;
  transform: scale(1) translate(10%, -30%);
`;
const Icon = styled.span`

`;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import doubleRightArrow from 'assets/icons/DoubleRightArrow.png';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  label: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#0096C7',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: '#0077B6',
    },
  },
  labelActive: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: (props) => ((props.breadcrumbsList.list.length > 0) ? '#64748B' : '#0096C7'),
  },
}));

export default function BreadcrumbCustom({ breadcrumbsList }) {
  const classes = useStyles({ breadcrumbsList });
  return (
    <Breadcrumbs separator={<Avatar src={doubleRightArrow} style={{ width: '16px', height: '16px' }} />} aria-label="breadcrumb">
      {breadcrumbsList.list.map((item) => (
        <Link className={classes.label} color="inherit" to={item.link} key={item.text}>
          {item.text}
        </Link>
      ))}
      <Typography className={classes.labelActive} color="textPrimary">{breadcrumbsList.active}</Typography>
    </Breadcrumbs>
  );
}

BreadcrumbCustom.propTypes = {
  breadcrumbsList: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
    active: PropTypes.string.isRequired,
  }).isRequired,
};

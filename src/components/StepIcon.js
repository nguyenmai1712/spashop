import StepConnector from '@material-ui/core/StepConnector';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

export const Connector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#fb6f92',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#fb6f92',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    fontSize: 32,
    color: '#fb6f92',
  },

  completedIcon: {
    fontSize: 32,
    color: '#fb6f92',
  },
  activeIcon: {
    fontSize: 32,
    color: '#fb6f92',
  },
  inActiveIcon: {
    zIndex: 1,
    fontSize: 32,
  },
});

function StepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {
        completed && <CheckCircleIcon className={classes.completedIcon} />
      }
      {
        active && <RadioButtonCheckedIcon className={classes.activeIcon} />
      }
      {
        !active && !completed && <RadioButtonUncheckedIcon className={classes.inActiveIcon} />
      }
    </div>
  );
}

StepIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default StepIcon;

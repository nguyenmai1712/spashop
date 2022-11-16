import React from 'react';
import { Chip, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  title: {
    fontSize: 15,
    padding: 5,
    fontWeight: 600,
    fontFamily: 'Lato',
    letterSpacing: 2,
  },

  chip: {
    margin: 5,
    color: '#686868',
    fontFamily: 'Lato',
    borderRadius: 8,
    '& .MuiChip-label': {
      fontSize: 11,
      padding: 5
    },
  }

}));

function TagCloud({ data }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (link) => {
    history.push(link);
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title}> TagCloud </Typography>
      <div className={classes.content}>
        {data.map((item) => (
          <Chip
            className={classes.chip}
            key={item.id}
            label={item.label}
            onClick={() => handleClick(item.link)}
            variant="outlined"
          />
        ))}
      </div>
    </div>
  )
}

export default TagCloud;
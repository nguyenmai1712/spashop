import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ItemProductRecommend from './ItemProductRecommend';
import clsx from 'clsx';
import { useWindowSize } from 'hooks/input.hooks';

const useStyles = makeStyles(() => ({
  recommendContainer: {
    padding: 10,
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  title: {
    padding: 5,
    fontWeight: 600,
    fontFamily: 'Lato',
    letterSpacing: 2,
  },
}));

function RecommendCard({ name, data , collapse}) {
  const classes = useStyles();
  const [windowsWidth] = useWindowSize();
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const container = document.querySelector(`.${name}`);
    setContainerWidth(container.offsetWidth);
  },[name, windowsWidth])
  
  return (
    <div className={clsx(classes.recommendContainer, name)}>
      {
        !collapse && <Typography className={classes.title}> {name} </Typography>
      }
      <div>
        {data.map(item => (
          <ItemProductRecommend item={item} key={item.id} containerWidth={containerWidth} />
        ))}
      </div>
    </div>
  )
}

export default RecommendCard;
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    '&.MuiPaper-elevation1': {
      boxShadow: 'none'
    },
  },
  media: {
    height: 140,
  },
  title: {
    fontFamily: 'Lato',
    fontWeight: 600,
    color: '#686868',
    '&:hover': {
      color: '#f4a51c ',
    },
  }
});

export default function MediaCard({ image, title, content, linkTo }) {
  const classes = useStyles();
  const history = useHistory();

  const handleNavigate = (link) => {
    history.push(link);
  }

  return (
    <Card className={classes.root} onClick={() => handleNavigate(linkTo)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

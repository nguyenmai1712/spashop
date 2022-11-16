import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import avatar from 'assets/images/adsModel.jpg';

const useStyles = makeStyles(() => ({
  container: {
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  root: {
    '&.MuiPaper-elevation1': {
      boxShadow: 'none'
    },
  },

  cardMedia: {
    objectFit: 'cover',
  },

}));
function AboutCard() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={avatar}
          title="Contemplative Reptile"
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              fontFamily: 'Lato',
            }}
          >
            Giới thiệu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Neque viverra justo nec ultrices dui sapien eget. Gravida cum sociis natoque penatibus. Imperdiet proin fermentum leo vel orci porta non
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Xem thêm
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default AboutCard;
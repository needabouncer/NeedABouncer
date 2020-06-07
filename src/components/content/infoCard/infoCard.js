import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './infoCard.module.css';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '2em 0'
    },
    media: {
      height: 140,
    },
  });

 const InfoCard = props => {

    const classes = useStyles();
  
    return (
    <ScrollAnimation animateIn={styles.Slide} animateOnce offset="110">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More info
          </Button>
        </CardActions>
      </Card>
      </ScrollAnimation>
    );
  }

  export default InfoCard;
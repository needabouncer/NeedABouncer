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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';


//OVERIDE CUSTOM TYPOGRAPHY BACK TO DEFAULT
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = makeStyles({
    root: {
      width: 345,
      height: 340,
      margin: '2em 1em'
    },
    card: {
      cursor: 'auto'
    },
    media: {
      height: 140,
    },
  });

 const InfoCard = props => {

    const classes = useStyles();
  
    return (
    <ScrollAnimation animateIn={styles.Slide} animateOnce offset="110">
       <ThemeProvider theme={theme}>
        <Card className={classes.root}>
          <CardActionArea className={classes.card} disabled component="div">
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
            <Button href={props.link} size="small" color="primary">
              More info
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
      </ScrollAnimation>
    );
  }

  export default InfoCard;
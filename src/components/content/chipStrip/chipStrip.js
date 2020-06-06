import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './chipStrip.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from "prismic-reactjs";
import ChipText from './chipText/chipText';
import { Colors } from '../../../constants/colors';

const useStyles = makeStyles(() => ({
    item: {
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2em 0',
    },
    side: {
        backgroundColor: Colors.secondary,
        padding: '1em',
        color: Colors.dark
    }
  }));

const ChipStrip = props => {
    const styles = useStyles();

    return (
        <Grid alignItems="center" container >
            <Grid classes={{item:[styles.item, styles.side].join(' ')}} item xs={12} sm={4}>
                <div className={classes.InfoContainer}>
                    {RichText.render(props.text)}
                </div>
            </Grid>
            <Grid classes={{item:styles.item}} item xs={12} sm={8}>
            <div className={classes.ChipContainer}>
                {props.chips.map(chip => <ChipText label={chip.text} />)}
            </div>
            </Grid>
        </Grid>
    )
}

export default ChipStrip;
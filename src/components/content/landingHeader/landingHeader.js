import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import classes from './LandingHeaderStyles.module.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Img from "gatsby-image"
import {Colors} from '../../../constants/colors';
// import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles(() => ({
    item: {
      minHeight: '70vh',
    },
    heading : {
        padding: '0.1em'
    }
  }));

  const usebuttonStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: Colors.secondary,
      marginTop: '1em',
      color: Colors.primary
    },
  }));



const LandingHeader = props => {
    const styles = useStyles();
    const buttonStyles = usebuttonStyles()
    // const inputStyle = inputStyles();
     return (
        <div>
        <Grid alignItems="center" container spacing={2}>
            <Grid classes={{item:styles.item}} item xs={12} sm={5}>
            <h1>Need Security?</h1>
             <p>We are a security company offering a range of services</p>
                <Paper>
                    <div className={classes.FormContainer}>
                        <form className={classes.Form} noValidate autoComplete="off">
                            <TextField margin="normal" type="string" fullWidth id="1" label="Your Name"  />
                            <TextField margin="normal" type="email" fullWidth id="2" label="Your Email" />
                            <TextField margin="normal" fullWidth multiline rows="8" fullWidth id="3" label="How can we help?" variant="outlined"/>
                            <Button
                                variant="contained"
                                color="primary"
                                className={buttonStyles.button}
                                // endIcon={<Icon>send</Icon>}
                            >
                                Get In Touch
                            </Button>
                        </form>
                    </div>
                </Paper>
            </Grid>
            <Grid classes={{item:styles.item}} item xs={12} sm={7}>
                <div style={{padding: '2em'}}>
                    <Img fluid={props.bannerImage} />
                </div>
            </Grid>
        </Grid>
  
        </div>
     )
}

export default LandingHeader
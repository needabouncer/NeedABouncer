import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import classes from './landingHeaderStyles.module.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Img from "gatsby-image"
import {Colors} from '../../../constants/colors';
// import Icon from '@material-ui/core/Icon';


const theme = createMuiTheme({
    typography: {
    button: {
        color: 'white',
        marginTop: '1em',
        backgroundColor: Colors.secondary
    },
}
  });




const LandingHeader = props => {
    const banner = props.bannerImage;

     return (
        <div>
        <Grid alignItems="center" container spacing={2}>
            <Grid item xs={12} sm={5}>
                <h1>Need Security?</h1>
                <p>We are a security company offering a range of services</p>
                <div style={{'width': '70%', 'margin': 'auto'}}className={classes.Mobile}     >
                    <Img fluid={banner} />
                </div>
                <div className={classes.Mobile}     >
                    <h3>Let's chat!</h3>
                </div>
                <Paper>
                    <div className={classes.FormContainer}>
                        <form className={classes.Form} noValidate autoComplete="off">
                            <TextField margin="normal" type="string" fullWidth id="1" label="Your Name"  />
                            <TextField margin="normal" type="email" fullWidth id="2" label="Your Email" />
                            <TextField margin="normal" fullWidth multiline rows="8" fullWidth id="3" label="How can we help?" variant="outlined"/>
                            <ThemeProvider theme={theme}>
                                <Button
                                    // variant="contained"
                                    // color="primary"
                                    
                                    // endIcon={<Icon>send</Icon>}
                                >
                                    Get In Touch
                                </Button>
                            </ThemeProvider>
                        </form>
                    </div>
                </Paper>
            </Grid>
            <Grid alignItems="center" item xs={12} sm={7}>
                <div className={classes.Desktop} style={{padding: '2em'}}>
                    <Img fluid={banner} />
                </div>
            </Grid>
        </Grid>
  
        </div>
     )
}

export default LandingHeader
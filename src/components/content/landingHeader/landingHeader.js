import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import classes from './landingHeaderStyles.module.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Img from "gatsby-image"
// import {Colors} from '../../../constants/colors';
import { linkResolver } from '../../../utils/linkResolver';
import { RichText } from 'prismic-reactjs';
// import Icon from '@material-ui/core/Icon';


const theme = createMuiTheme({
    typography: {
    button: {
        // color: 'white',
        marginTop: '1em',
        padding: '0.5em',
        // backgroundColor: Colors.secondary,
    },
}
  });




const LandingHeader = props => {
    const banner = props.bannerImage;

     return (
        <div>
        <Grid alignItems="center" container spacing={2}>
            <Grid item xs={12} sm={5}>
                {RichText.render(props.text, linkResolver)} 
                <div style={{'width': '70%', 'margin': 'auto'}}className={classes.Mobile}     >
                    <Img fluid={banner} />
                </div>
                <div className={classes.Mobile}     >
                    <h3>Let's chat!</h3>
                </div>
                <Paper>
                    <div className={classes.FormContainer}>
                        <form name="contact" method="POST" data-netlify="true" className={classes.Form} noValidate autoComplete="off">
                            <input type="hidden" name="form-name"  value="contact" />
                            <TextField margin="normal" type="string" fullWidth id="1" label="Your Name" name="Name"  />
                            <TextField margin="normal" type="email" fullWidth id="2" label="Your Email" name="Email" />
                            <TextField margin="normal" fullWidth multiline rows="8" fullWidth id="3" name="Message" label="How can we help?" variant="outlined"/>
                            <ThemeProvider theme={theme}>
                                <Button
                                   type="submit" 
                                   variant="contained"
                                    color="primary"

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
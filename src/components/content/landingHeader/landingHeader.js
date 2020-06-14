import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './landingHeaderStyles.module.css';
import Img from "gatsby-image"
// import {Colors} from '../../../constants/colors';
import { linkResolver } from '../../../utils/linkResolver';
import { RichText } from 'prismic-reactjs';
import Form from '../../slices/Form/Form';

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
              
                <div className={classes.FormContainer}>
                    <Form slice={ props.formData } />
                </div>
               
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
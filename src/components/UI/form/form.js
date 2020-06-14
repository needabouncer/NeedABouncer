import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './formStyles.module.css';

const NetlifyForm = (props) => {

    const data = props.formData;
    console.log("props received")
    console.log(data)

    const inputTypes = {
        'text': 'string',
        'number': 'number',
        'email': 'email',
        'multi-line': 'multiLine'
    }

    const theme = createMuiTheme({
        typography: {
        button: {
            // color: 'white',
            margin: '1em 0',
            padding: '0.5em',
            // backgroundColor: Colors.secondary,
        },
    }
      });


    if (data) {
        const inputs = data.node.body.map((input, i) => {
            const type = inputTypes[input.primary.input_type]
            return <TextField
                        key={i + input.primary.label_text[0].text.split().join('')} 
                        margin="normal" 
                        type={type} 
                        fullWidth 
                        id={i + input.primary.label_text[0].text.split().join('')} 
                        label={input.primary.placeholder_text[0].text} 
                        name={input.primary.label_text[0].text} 
                        multiline={type === 'multiLine'}
                        required={input.primary.required}
                        rows='8'
                        variant={type==='multiLine' ? 'outlined' : 'standard'}
                        
                    />
        })

        console.log("rendering niw!")
        
    
        return (
            <form validate name={data.node.form_title[0].text} method="POST" data-netlify="true"  className={classes.Form} >
                <input type="hidden" name="form-name"  value={data.node.form_title[0].text} />
                {inputs}
                <ThemeProvider theme={theme}>
                    <Button
                        type="submit" 
                        variant="contained"
                        color="primary"
                    >
                        Get In Touch
                    </Button>
                </ThemeProvider>
            </form>
        )
    }

    else return null;

}

export default NetlifyForm;
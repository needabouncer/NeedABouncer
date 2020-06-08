import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Colors} from '../../constants/colors';


const theme = createMuiTheme({
typography: {
  fontFamily: [
    'Merriweather',
    'Georgia',
    'serif',
  ].join(','),
},
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: Colors.primary,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: Colors.secondary,
      // dark: will be calculated from palette.secondary.main,
      contrastText: Colors.dark,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const PageLayout = (props) => {
    return (
        <ThemeProvider theme={theme}>
          <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            minHeight: '65vh',
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          {props.children}  
          </div>
        </ThemeProvider>
    )
}

export default PageLayout
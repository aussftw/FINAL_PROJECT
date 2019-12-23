import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen, grey } from '@material-ui/core/colors';

const breakePointsValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const theme = createMuiTheme({
  overrides: {
    MuiGridListTile: {
      root: {
        position: 'relative',
      },
      tile: {
        padding: '0 15px',
      },
    },
  },
  palette: {
    primary: {
      main: lightGreen[700], //main theme color
      light: lightGreen[100], //footer bg
      dark: lightGreen[900], //hover btn
    },
    secondary: {
      main: grey[700], //main grey
      dark: grey[900], // black
      light: grey[100], //maybe
    },
  },
});

export default theme;

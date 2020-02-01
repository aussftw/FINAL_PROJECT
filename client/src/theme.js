import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({

  breakpoints: {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: lightGreen[700], // main theme color
      light: lightGreen[100], // footer bg
      dark: lightGreen[900], // hover btn
    },
    secondary: {
      main: grey[700], // main grey
      dark: grey[800], // black
      medium: grey[500], // medium
      light: grey[200], // maybe
    },
  },
  spacing: 8,

  typography: {
    h3: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 30,
      textTransform: "uppercase",
      color: grey[800]
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
      margin: 30,
      marginBottom: 8,
      textTransform: "uppercase",
      textAlign: "center",
      color: grey[800]
    }
  },

  overrides: {
    MuiGridListTile: {
      root: {
        position: "relative",
        height:"auto"
      },
      tile: {
        padding: "0.5em 0.5em",
        height:"auto",
      },
    },

    MuiTooltip: {
      tooltip: {
        fontSize: "13px",
        backgroundColor: lightGreen[700],
      },
      arrow: {
        color: lightGreen[700],
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: lightGreen[100],
        },
      },
    },

    MuiFab: {
      secondary: {
        backgroundColor: lightGreen[700],
        "&:hover": {
          backgroundColor: lightGreen[900],
        },
      },
    },

    MuiButton: {
      root: {
        fontSize: 13,
        fontWeight: 600,
      },
      text: {
        color: grey[700],
        "&:hover": {
          color: lightGreen[900],
          backgroundColor: lightGreen[100],
        },
      },
      contained: {
        color: "white",
        backgroundColor: lightGreen[700],
        "&:hover": {
          backgroundColor: lightGreen[900],
        },
      },
      outlined: {
        color: lightGreen[700],
        "&:hover": {
          color: lightGreen[900],
          backgroundColor: lightGreen[100]
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        fontWeight: 800,
        backgroundColor: "white",
      },
    },
    MuiExpansionPanelSummary: {
      content: {
        justifyContent: "space-between",
        alignItems: "center",
        margin: 0,
      },
    },
  },
});

export default theme;

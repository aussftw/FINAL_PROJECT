import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen, grey } from "@material-ui/core/colors";

// const breakePointsValues = {
//   xs: 0,
//   sm: 576,
//   md: 768,
//   lg: 992,
//   xl: 1200,
// };

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[700], // main theme color
      light: lightGreen[100], // footer bg
      dark: lightGreen[900], // hover btn
    },
    secondary: {
      main: grey[700], // main grey
      dark: grey[900], // black
      light: grey[200], // maybe
    },
  },
  spacing: 8,
  overrides: {
    MuiGridListTile: {
      root: {
        position: "relative",
      },
      tile: {
        padding: "0 15px",
      },
    },

    MuiTooltip: {
      tooltip: {
        fontSize: "14px",
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
      root: {
        backgroundColor: "white",
        color: lightGreen[700],
        "&:hover": {
          boxShadow:
            "0px 3px 5px -1px lightGreen, 0px 6px 10px 0px lightGreen, 0px 1px 18px 0px lightGreen",
          backgroundColor: "white",
        },
      },
    },

    MuiButton: {
      root: {
        fontSize: 13,
        fontWeight: 600,
      },
      text: {
        color: grey[900],
        "&:hover": {
          color: lightGreen[700],
          backgroundColor: lightGreen[100],
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        fontWeight: 800,
        backgroundColor: "white",
      },
    },
  },
});

export default theme;

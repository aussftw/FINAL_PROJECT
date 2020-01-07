import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: theme.palette.primary.light,
    padding: 0,
  },

  footerData: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "2rem 10rem",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 15,
    marginBottom: 20,
  },
  logo: {
    height: 50,
    width: 170,
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: theme.palette.primary.light,
    padding: 0,
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

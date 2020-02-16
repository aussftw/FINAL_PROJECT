import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  informationGrid: {
    [theme.breakpoints.up("md")]: {
      marginBottom: 21
    },
  },
  mainContainer: {
    backgroundColor: theme.palette.primary.light,
  },
  containerTittle: {
    fontWeight: 500,
    fontSize: 18,
  },
  myAccountItem: {
    marginTop: "1.2rem",
  },
  informationItem: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  },
}));

export default useStyles;

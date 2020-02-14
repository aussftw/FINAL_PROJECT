import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    width: "100%",
    maxWidth: 300,
    marginBottom: 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.2)",
    borderRadius: 10,
    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "300px",
      boxShadow: "none",
      marginTop: 0,
      borderRadius: 0,
      marginBottom: 20,
      paddingBottom: 0,
      backgroundColor: theme.palette.primary.light,
    },
  },
  listItem: {
    color: theme.palette.primary.dark,
    "&:selected": {
      color: theme.palette.primary.light,
    },
  },
  subLine: {
    margin: "10px 20px",
    width: "60%",
    height: 5,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
  },
  title: {
    margin: "5px 20px",
    fontSize: 20,
    textTransform: "none",
  },
  label: {
    width: "100%",
  },
  iconContainer: {
    marginRight: -15,
  },
  iconActiveContainer: {
    color: theme.palette.primary.dark,
    marginRight: -5,
  },
  text: {
    fontSize: "0.95em !important",
  },
}));

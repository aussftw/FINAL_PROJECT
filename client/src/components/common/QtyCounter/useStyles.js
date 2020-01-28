import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  subscribeContainer: {
    backgroundColor: theme.palette.primary.light,
    paddingTop: 20,
    paddingBottom: 10,
  },

  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    padding: 2,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
  },

  title: {},

  input: {
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    width: "20%",
    borderRadius: "5px",
    border: 2,
  },

  actionButton: {
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    height: 50,
  },

  subscribeBar: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default useStyles;

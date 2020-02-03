import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  subscribeContainer: {
    backgroundColor: theme.palette.primary.light,
    paddingTop: 20,
    paddingBottom: 10,
  },
  subscribeTitle: {
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: 600,
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: "4px 0 0 4px",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
    borderColor: theme.palette.primary.light,
    "& fieldset": {
      borderRadius: "4px 0 0 4px",
    },
  },

  actionButton: {
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    height: 54.9,
    borderRadius: "0 4px 4px 0",
  },

  subscribeBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem",
  },
}));

export default useStyles;

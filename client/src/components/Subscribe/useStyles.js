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
  },

  input: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 2,
    width: "90%",
    marginBottom: 15,
    borderRadius: "5px",
  },

  actionButton: {
    marginBottom: 15,
    padding: 20,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
  },

  subscribeBar: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default useStyles;

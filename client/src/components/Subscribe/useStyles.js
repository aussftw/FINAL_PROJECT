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
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    paddingBottom: 2,
    width: "90%",
    marginBottom: 15,
    borderRadius: "5px",
    height: 50,
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

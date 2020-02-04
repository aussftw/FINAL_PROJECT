import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  orderDetailsContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    minHeight: "calc( 100vh - 200px)",
  },
  mainText: {
    textAlign: "justify"
  },
  details: {
    margin: 10,
    fontSize: 12,
    textAlign: "justify",
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
}));

export default useStyles;

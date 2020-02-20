import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  address: {
    width: "200px",
    fontSize: "0.875rem"
  },
  message: {
    margin: "16px 0px 16px 0",
    textAlign: "center",
  },
  btn: {
    margin: theme.spacing(2),
  }
}));

export default useStyles;

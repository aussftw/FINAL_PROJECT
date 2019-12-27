import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: theme.palette.primary.light,
  },
  paymentMethods: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default useStyles;

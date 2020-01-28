import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  cartHeader: {
    height: 50,
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.secondary.dark,
    margin: "0 10px 0 10px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      margin: 0,
    },
  },
  cartFooter: {
    height: 50,
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
  },

}));

export default useStyles;

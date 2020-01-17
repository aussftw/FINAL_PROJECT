import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  brandsContaier: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  brand: {
    margin: "1rem",
    [theme.breakpoints.up("sm")]: {
      margin: "2rem",
    },
    backgroundSize: "cover",
    overflow: "hidden",
  },
}));

export default useStyles;

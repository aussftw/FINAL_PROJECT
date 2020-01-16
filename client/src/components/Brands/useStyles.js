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
    margin: "1rem 1rem 1rem rem",
    width: 120,
    height: 150,
    backgroundSize: "cover",
    overflow: "hidden",
  },
}));

export default useStyles;

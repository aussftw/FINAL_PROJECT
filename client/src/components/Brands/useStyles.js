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
    margin: "1rem 4rem 1rem 3rem",
    width: 250,
    height: 150,
    backgroundSize: "cover",
    overflow: "hidden",
  },
}));

export default useStyles;

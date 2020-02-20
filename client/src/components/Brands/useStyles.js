import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  brandsContaier: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  brand: {
    margin: "1rem",
    backgroundSize: "cover",
    overflow: "hidden",
    maxWidth: "17vw",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem",
      maxWidth: "50vw"
    },
  },
}));

export default useStyles;

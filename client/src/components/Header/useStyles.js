import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: "40px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  link: {
    color: "black",
    "&$visited": {
      color: "theme. primary.dark",
    },
  },
  searchDesktop: {
    display: "flex",
    // display: "none",
    // [theme.breakpoints.up("md")]: {
    //   display: "flex",
    // },
  },
}));
export default useStyles;

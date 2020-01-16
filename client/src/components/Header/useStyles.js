import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: "40px",
  },
  searchDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
export default useStyles;

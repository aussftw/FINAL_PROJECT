import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    padding: "20px 10px",
  },
  sideMenuTitle: {
    fontWeight: 700,
    margin: "0",
    alignSelf: "center",
  },
  sideMenuHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    paddingLeft: "24px",
  },
  sideMenuText: {
    display: "block",
    padding: "12px 24px",
    color: "black",
    textDecoration: "none",
  },
  dropdownText: {
    color: "black",
    textDecoration: "none",
  },
  nestedList: {
    paddingLeft: "15%",
  },
  expPanel: {
    boxShadow: "none",
    "&:before": {
      height: 0,
    },
  },
  burgerMenuMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
export default useStyles;

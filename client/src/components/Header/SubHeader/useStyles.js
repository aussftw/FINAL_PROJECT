import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  subheader: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    minHeight: "25px",
    padding: "10px 24px",
    backgroundColor: theme.palette.secondary.light,
  },
  link: {
    display: "inline-block",
    padding: "0 20px",
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
  searchMobile: {
    marginTop: "8px",
    display: "flex",
    width: "90%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  MarginTopWrap: {
    marginTop: "65px",
    display: "flex",
    justifyContent: "center",
  },
}));
export default useStyles;

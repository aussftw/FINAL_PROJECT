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
    position: "relative",
    margin: "0 20px",
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: 500,
    "&:after": {
      position: "absolute",
      content: "''",
      display: "block",
      boxSizing: "border-box",
      height: 3,
      width: "0",
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      transition: "0.5s"
    },
    
    "&:hover": {
      "&:after": {
        width: "100%",
      },
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

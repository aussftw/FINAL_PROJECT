import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

export const useStyles = makeStyles(() => ({
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    marginBottom: "20px",
    justifyContent: "space-around",
  },
  itemCard:{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  allFilters: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.down("md")]:{
      display: "none",
    },
  },
  items: {
    width: "70%",
    marginTop: 85,
     [theme.breakpoints.down("md")]: {
       width: "100%",
     },
  },
  modal: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paper: {
    backgroundColor: theme.palette.primary.light,
    width: "25%",
    padding: "0px 20px 24px",
    overflowX: "auto",
  },
  btn: {
    display: "none",
    [theme.breakpoints.down("lg")]: {
       margin: "20px 1.5em 20px auto ",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      padding: '13px 45px',
      fontSize: "16px",
      borderRadius: "10px",
      border: "none",
      outline: "none",
      color: "white",
      cursor: "pointer",
      margin: "20px 4.5em 20px auto ",
      backgroundColor: theme.palette.primary.main,
      "&:active":{
        boxShadow: "1px 1px black"
      }
    },
    [theme.breakpoints.down("sm")]:{
      margin: "20px 2.5em 20px auto ",
    }
  },
  category: {
    backgroundColor: "black"
  }
}));
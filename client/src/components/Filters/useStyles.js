import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  filtersContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  main: {
    width: "100%",
    display: "flex",
    marginBottom: "20px",
    justifyContent: "space-between",
  },
  itemCard: {
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 330px)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      marginTop: 35,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  allFilters: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  items: {
    width: "70%",
    marginTop: 85,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 0,
    },
  },
  modal: {
    display: "flex",
    justifyContent: "flex-end",
  },
  paper: {
    backgroundColor: theme.palette.primary.light,
    width: "25%",
    minWidth: 146,
    padding: "0px 20px 24px",
    overflowX: "auto",
  },
  btn: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      margin: "0 1.5em 20px auto ",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      border: "none",
      outline: "none",
      color: "white",
      cursor: "pointer",
      margin: "0 0 20px auto ",
      backgroundColor: theme.palette.primary.main,
      "&:active": {
        boxShadow: "1px 1px black",
      },
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 2.5em 20px auto ",
    },
  },
  category: {
    backgroundColor: "black",
  },
  cardSkeleton: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
  wrapper: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
  },
  span: {
    color: theme.palette.secondary.main,
  },
}));

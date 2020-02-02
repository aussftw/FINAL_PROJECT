import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  item: {
    height: 75,
    alignItems: "center",
    justifyItems: "center",
    border: "1px solid",
    borderTop: "none",
    borderColor: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      height: 88,
    },
    minWidth: 200,
    "&:first-child": {
      border: "1px solid",
      borderColor: theme.palette.secondary.light,
    },
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 50,
    objectFit: "cover",
  },
  link: {
    textDecoration: "none",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  titleGrid: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  price: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
  },
}));

export default useStyles;

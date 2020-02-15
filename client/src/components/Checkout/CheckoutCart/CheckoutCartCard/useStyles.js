import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  item: {
    height: 56,
    alignItems: "center",
    justifyItems: "center",
    border: "1px solid",
    borderTop: "none",
    borderColor: theme.palette.secondary.light,
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 40,
    objectFit: "cover",
  },
  link: {
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
  title: {
    fontSize: 12,
    textTransform: "capitalize",
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  quantityGrid: {
    display: "flex",
    justifyContent: "center",
  },
  subtotal: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  quantity: {
    marginRight: 15,
    textAlign: "right",
    fontSize: 12,
  },
  price: {
    marginRight: 15,
    textAlign: "right",
    fontSize: 12,
    fontWeight: 600,
  },
}));

export default useStyles;

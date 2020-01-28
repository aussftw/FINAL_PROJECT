import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  item: {
    height: 63,
    alignItems: "center",
    justifyItems: "center",
    border: "1px solid",
    borderTop: "none",
    borderColor: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      height: 50,
    },
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
    fontSize: 11,
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
  quantity: {
    marginRight: 5,
    textAlign: "right",
    fontSize: 11,
  },
  price: {
    marginRight: 5,
    textAlign: "right",
    fontSize: 11,
    fontWeight: 600,
  },
}));

export default useStyles;

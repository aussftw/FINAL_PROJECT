import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    display: "inline-block",
    flexGrow: 1,
    margin: theme.spacing(1),
    width: 240,
    padding: theme.spacing(1),
    transition: "box-shadow 0.2s ease-out",
    "&:hover": {
      boxShadow: "2px 3px 7px 0px rgba(0,0,0,0.24)",
    },
    "&:hover $mediaImage": {
      transform: "scale(1)",
    },
  },
  wishList: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.primary.main,
    backgroundColor: "#ffffff",
    zIndex: 2,
  },
  actionArea: {
    color: theme.palette.primary.main,
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  focusHighlight: {},
  cardContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: 0,
  },
  mediaImage: {
    height: 200,
    transform: "scale(0.95)",
    transition: "transform 0.2s ease-out",
  },
  title: {
    fontSize: 14,
    textTransform: "capitalize",
    paddingBottom: 5,
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  rating: {
    paddingBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  price: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  link: {
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
  outOfStock: {
    paddingTop: theme.spacing(1),
    paddingBottom: 7,
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: 700,
    color: theme.palette.secondary.medium,
  },
  snackbar: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
  },
  snackbarMessage: {
    position: "absolute",
    top: 18,
    left: 68,
    fontSize: 15,
  },
}));

export default useStyles;

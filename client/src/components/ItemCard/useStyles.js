import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    display: "inline-block",
    flexGrow: 1,
    margin: theme.spacing(1),
    width: 240,
    padding: 4,
    "&:hover": {
      boxShadow: "1px 3px 7px 0px rgba(0,0,0,0.24)",
    },
  },
  wishList: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.primary.main,
    backgroundColor: "#ffffff",
    zIndex: 2,
  },
  actionArea: {
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
  },
  title: {
    fontSize: 14,
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  rating: {
    paddingBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    iconEmpty: {
      color: theme.palette.primary.main,
    },
  },
  price: {
    fontSize: 14,
    fontWeight: 600,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  removeFromCart: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
}));

export default useStyles;

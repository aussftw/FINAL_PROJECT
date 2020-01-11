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
    transform: "scale(0.9)",
    transition: "transform 0.2s ease-out",
  },
  title: {
    fontSize: 14,
    paddingBottom: 5,
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
  inCart: {
    paddingTop: theme.spacing(1),
    paddingBottom: 7,
    fontSize: 13,
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
}));

export default useStyles;

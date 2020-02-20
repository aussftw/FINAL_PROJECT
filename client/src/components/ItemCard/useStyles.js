import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    display: "inline-block",
    flexGrow: 1,
    width: 240,
    height: 320,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
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
    paddingTop: 6,
    paddingBottom: 0,
  },
  mediaImage: {
    height: 210,
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
    paddingBottom: 6,
    color: theme.palette.primary.main,
  },
  priceBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  OldPrice: {
    marginTop: 1,
    fontSize: 13,
    marginLeft: 10,
    fontWeight: 600,
    color: theme.palette.secondary.medium,
  },
  link: {
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
  cardSkeleton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: 240,
    height: 320,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
}));

export default useStyles;

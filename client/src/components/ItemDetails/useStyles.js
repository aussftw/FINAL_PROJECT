import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 2,
  },
  detailsHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.primary.light,
    padding: 5,
  },

  linkIcon: {
    marginRight: theme.spacing(1.5),
  },
  icon: {
    fontSize: "large",
  },

  imgScale: {
    height: 150,
    width: 200,
  },
  detailsTitle: {
    fontWeight: 600,
    fontSize: 16,
    marginTop: 5,
    // ":firstLetter": {
    //   textTransform: "capitalize",
    // },
  },
  infoTitle: {
    fontWeight: 600,
    marginTop: 15,
    marginBottom: 10,
  },
  infoProductCode: {
    fontSize: 14,
  },
  detailsBody: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },

  rarings: {
    marginLeft: theme.spacing(2),
  },
  infoDetail: {
    maxWidth: 120,
    margin: 0,
  },
  infoDetailValue: {},
  currentPrice: {
    fontWeight: 600,
  },
  buttonsBar: {
    marginTop: 15,
    marginBottom: 15,
  },
  actionButton: {
    marginLeft: 4,
    marginRight: 4,
  },
  detailsDescription: {
    marginTop: 15,
    marginBottom: 10,
  },
  descriptionText: {
    textAlign: "justify",
    marginTop: 10,
  },
  previousPrice: {
    fontWeight: 600,
    "&:before": {
      content: "",
      display: "block",
      width: "100%",
      borderTop: 2,
      height: 12,
      position: "absolute",
      bottom: 0,
      left: 0,
      transform: "rotate(-7deg",
    },
  },
}));

export default useStyles;

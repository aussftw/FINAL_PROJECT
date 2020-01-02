import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 2,
  },
  detailsHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.primary.light,
  },

  linkIcon: {
    marginRight: theme.spacing(1.5),
  },
  icon: {
    fontSize: "large",
  },
  detailsTitle: {
    fontWeight: 600,
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
  infoDetail: {
    maxWidth: 120,
  },
  infoDetailValue: {},
  currentPrice: {
    fontWeight: 600,
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

  buttonsBar: {
    marginTop: 200,
  },
}));

export default useStyles;

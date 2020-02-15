import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 2,
  },
  detailsHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.primary.light,
    padding: "0.4rem",
    marginTop: "1.5rem",
  },
  linkIcon: {
    marginRight: theme.spacing(1),
  },
  icon: {
    fontSize: "large",
  },
  imagesContainer: {
    marginTop: theme.spacing(5),
  },
  imgScale: {
    maxHeight: 500,
  },
  detailsTitle: {
    textTransform: "capitalize",
    fontSize: 16,
    marginTop: 4,
  },
  infoContainer: {
    minWidth: 180,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      // width: "50%",
      minWidth: 250,
    },
  },

  infoTitle: {
    textTransform: "capitalize",
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
  qty_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    padding: 2,
    // [theme.breakpoints.up("sm")]: {
    //   flexDirection: "column",
    // },
  },
  qty_text: {
    "align-self": "center",
  },
  input: {
    backgroundColor: "#fff",
    paddingLeft: 13,
    // paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    width: "35px",
    borderRadius: "5px",
    border: 2,
    textAlign: "center",
  },
  infoDetail: {
    // maxWidth: 120,
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
    height: 38,
    margin: 4,
  },
  detailsDescription: {
    marginTop: 15,
    marginBottom: 10,
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
      transform: "rotate(-7deg)",
    },
  },
}));

export default useStyles;
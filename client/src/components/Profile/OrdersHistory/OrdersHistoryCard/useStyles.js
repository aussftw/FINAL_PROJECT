import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  panel: {
    margin: "10px 0 10px 0",
    "border-radius": 4,
  },
  content: {
    padding: "0 5px 0 5px",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "0 24px 0 24px",
    },
  },
  order: {
    fontSize: 11,
    marginRight: 10,
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
  data: {
    fontSize: 11,
    marginRight: 10,
    color: theme.palette.text.secondary,

  },
  img_wrapper: {
    width: 150,
    display: "flex",
    justifyContent: "center",
  },
  img: {
    height: 40,
  },
  after_img: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: 40,
  },
  products: {
    display: "flex",
    flexDirection: "column",
    padding: "0 5px 0 5px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 24px 0 24px",
    },
  },
  footer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  total: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: 17,
    },
  },
  details: {
    fontSize: 12,
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
  status: {
    fontSize: 12,
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
}));

export default useStyles;

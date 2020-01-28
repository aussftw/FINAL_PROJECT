import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  item: {
    height: 75,
    alignItems: "center",
    justifyItems: "center",
    border: "1px solid",
    borderTop: "none",
    borderColor: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
    minWidth: 200,
    "&:first-child": {
      border: "1px solid",
      borderColor: theme.palette.secondary.light,
    },
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 50,
    objectFit: "cover",
  },
  link: {
    textDecoration: "none",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  titleGrid: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  quantityNumber: {
    margin: "0px 6px",
    fontSize: 14,
    width: 36,
    textAlign: "center",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
    "&:focus": {
      outlineColor: theme.palette.primary.main,
    },
  },
  price: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
      textAlign: "left",
    },
  },
  stock: {
    textAlign: "center",
    fontSize: 14,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  outstock: {
    textAlign: "center",
    fontSize: 14,
    color: "red",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  closeBtnGrid: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "start",
    },
  },
  wrapperGrid: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    fontSize: "12px",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: "5px",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  disabledBtn: {
    fontSize: "12px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
}));

export default useStyles;

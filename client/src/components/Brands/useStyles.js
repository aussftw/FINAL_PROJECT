import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  border: {
    border: "1px solid black",
  },
  brandsContaier: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  brand: {
    margin: theme.spacing(1.5),
    width: 150,
    height: 110,
  },
}));

export default useStyles;

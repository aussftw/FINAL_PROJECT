import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  border: {
    border: "1px solid black",
  },
  brandsContaier: {
    display: "flex",
    flexDirection: "column",
  },
  brand: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
    height: 100,
  },
}));

export default useStyles;

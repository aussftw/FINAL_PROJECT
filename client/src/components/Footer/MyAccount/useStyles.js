import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: theme.palette.primary.light,
  },
  containerTittle: {
    fontWeight: 500,
    fontSize: 18,
  },
  myAccountItem: {
    marginTop: "1.2rem",
  },
}));

export default useStyles;

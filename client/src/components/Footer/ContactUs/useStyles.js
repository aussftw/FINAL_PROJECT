import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contactUsIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  contactUsItem: {
    fontSize: 16,
  },
  bg: {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default useStyles;

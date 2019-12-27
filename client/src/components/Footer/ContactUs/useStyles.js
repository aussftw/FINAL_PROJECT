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
    borderRadius: "0px", // dosent work
  },
}));

export default useStyles;

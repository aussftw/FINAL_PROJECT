import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 900,
    paddingTop: 30,
    paddingBottom: 30,
  },
  tabsComponent: {
    flexGrow: 1,
  },
  tabsList: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  tabText: {
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;

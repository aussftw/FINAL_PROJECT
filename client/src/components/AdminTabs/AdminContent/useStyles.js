import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  contentBox: {
    minWidth: "70%",
  },
  tabsComponent: {
    display: "flex",
  },
  tabsList: {
    minWidth: "18%",
    color: theme.palette.primary.main,
    marginRight: theme.spacing(3),
  },
  tabText: {
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;

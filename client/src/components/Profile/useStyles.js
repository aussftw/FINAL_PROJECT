import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 800,
    marginTop: 20,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 90,
  },
}));

export default useStyles;

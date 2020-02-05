import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: 800,
    marginTop: 20,
  },
  tabs: {
    color: theme.palette.primary.dark,
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 200,
    minWidth: 90,
  },
  tabpanel: {
    width: "100%",
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
}));

export default useStyles;

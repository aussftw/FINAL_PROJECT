import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  partnersItem: {
    marginTop: "1%",
    maxHeight: "8%",
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    flexWrap: "no-wrap",
    backgroundColor: theme.palette.primary.light
  },
  partnersImg: {
    // objectFit: "contain",
    borderRadius: "20%",
  },
}));

export default useStyles;

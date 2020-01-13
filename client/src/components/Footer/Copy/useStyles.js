import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  // we can also use theme here
  textedFooter: {
    paddingBottom: "2rem",
    paddingTop: "2rem",
    textAlign: "center",
  },
  copyHeader: {
    paddingTop: 30,
  },
}));

export default useStyles;

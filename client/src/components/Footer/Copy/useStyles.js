import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  // we can also use theme here
  textedFooter: {
    paddingBottom: 30,
    paddingTop: 10,
    textAlign: "center",
  },
  copyHeader: {
    paddingTop: 30,
  },
}));

export default useStyles;

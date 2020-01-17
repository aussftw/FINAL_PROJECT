import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    // width: 600,
    flexDirection: "column",
  },
  title: {
    margin: "0px 0px 5px 0",
    padding: 5,
    textAlign: "center",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  message: {
    textAlign: "center",
  },
}));

export default useStyles;

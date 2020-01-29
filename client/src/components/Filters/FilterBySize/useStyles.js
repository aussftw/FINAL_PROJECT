import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 300,
    marginBottom: 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 5px",
    borderRadius: 10,
    paddingBottom: 0,
    [theme.breakpoints.down("md")]:{
      marginBottom: 20,
    }
  },
  line: {
    margin: "10px 20px",
    position: "relative",
    width: "80%",
    height: 5,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  subLine: {
    position: "absolute",
    top: 50,
    left: 20,
    width: "60%",
    height: 5,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
  },
  title: {
    margin: "5px 20px",
    fontSize: 20,
  },
  label: {
    width: "85%",
  },
}));

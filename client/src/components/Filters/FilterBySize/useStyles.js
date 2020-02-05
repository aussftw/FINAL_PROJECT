import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 300,
    marginBottom: 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.2)",
    borderRadius: 10,
    paddingBottom: 0,
    [theme.breakpoints.down("md")]: {
      marginBottom: 20,
    },
  },
  subLine: {
    margin: "10px 20px",
    width: "60%",
    height: 5,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
  },
  title: {
    margin: "5px 20px",
    fontSize: 20,
    textTransform: "none",
  },
  label: {
    width: "85%",
  },
}));

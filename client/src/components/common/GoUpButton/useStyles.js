import { makeStyles } from "@material-ui/core";
import theme from "../../../theme";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: "20",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});

export default useStyles;

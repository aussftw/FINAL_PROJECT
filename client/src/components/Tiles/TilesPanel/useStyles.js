import { makeStyles } from "@material-ui/core";
import theme from "../../../theme";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexWrap: "wrap",
  },
  tileBox: {
    maxWidth: "643px",
    height: "800px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
});

export default useStyles;

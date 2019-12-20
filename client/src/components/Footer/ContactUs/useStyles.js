import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme";

const useStyles = makeStyles(theme => ({
  draftsIcon: {
    marginRight: theme.spacing(1),
  },
  bg: {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default useStyles;

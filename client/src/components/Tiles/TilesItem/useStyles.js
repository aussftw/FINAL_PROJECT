import { makeStyles } from "@material-ui/core";
import theme from '../../../theme';

const useStyles = makeStyles({
  img: {
    height: "auto",
    borderRadius: "10px",
    transition:"ease-in-out 0.75s",
    "&:hover":{
      transform: "scale(1.2)",
    },
  },
  mediaWrapper: {
    borderRadius: "10px",
    display: "block",
    boxSizing:"border-box",
    width: "100%",
    height: "auto",
    overflow:"hidden",
    cursor:"pointer",
    "&:hover > button": {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
    },
  },
});

export default useStyles;

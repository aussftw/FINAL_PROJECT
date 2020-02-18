import { makeStyles } from "@material-ui/core";
import theme from '../../../theme';

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexWrap:"nowrap",
    [theme.breakpoints.down("lg")]:{
      display: "flex",
      flexWrap:"nowrap",
    },
    [theme.breakpoints.down("md")]:{
      display: "flex",
      flexWrap:"nowrap",
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.down("xs")]:{
      display: "flex",
      flexWrap:"wrap",
    },
  },
  tileBox: {
    width:"100%",
    margin:"0 !important",
  },
});

export default useStyles;

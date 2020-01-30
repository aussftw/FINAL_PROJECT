import makeStyles from '@material-ui/core/styles/makeStyles';
import theme from '../../../../theme';

const useStyles = makeStyles({
  paymentWrapper:{
    marginBottom:"1.5em",

  },
  checkboxForm: {
    width:"90%",
    margin:"0 auto",
    display:"flex",
    justifyContent:"space-evenly",
    textAlign:"center",
  },
  paymentText: {
    color:theme.palette.primary.main,
    fontSize:"1.2 em",
    fontWeight:"bold",
  },
  checkboxLabel: {
    color: theme.palette.primary.dark,
  },
});

export default useStyles;
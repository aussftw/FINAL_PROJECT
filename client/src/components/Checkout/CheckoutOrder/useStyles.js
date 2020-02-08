import makeStyles from '@material-ui/core/styles/makeStyles';
import theme from '../../../theme';


const useStyles = makeStyles({
  infoForUser: {
    color:theme.palette.primary.dark,
    fontSize:"18px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField:{
    width:"90%",
    margin:"1em auto"
  },
  submitBtn:{
    width: "50%",
    backgroundColor: theme.palette.primary.light,
    color:theme.palette.primary.dark,
    padding:"1em",
    margin: "20px auto",
    "&:hover":{
      backgroundColor: theme.palette.primary.main,
      color:"white",
    },
  }
});

export default useStyles;
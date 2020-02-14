import { makeStyles } from "@material-ui/core/styles";
import theme from '../../theme';

const useStyles = makeStyles({
  checkoutContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  messagesWrapper:{
    margin:"8.75em auto"
  },
  message:{
    fontSize:"1.1em",
    marginTop:"1em",
    color: theme.palette.primary.main,
  },
  mainMessage:{
    color: theme.palette.primary.dark,
  },
  submitBtn:{
    width: "50%",
    backgroundColor: theme.palette.primary.light,
    color:theme.palette.primary.dark,
    padding:"1em",
    margin: "10px auto",
    "&:hover":{
      backgroundColor: theme.palette.primary.main,
      color:"white",
    },
  },
  errorMessage: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default useStyles;

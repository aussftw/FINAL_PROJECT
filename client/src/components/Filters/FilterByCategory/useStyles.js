import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme";

export const useStyles = makeStyles(() => ({
    root: {
    marginTop:100,
    width: "100%",
    maxWidth: 300,
    marginBottom: 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 5px",
    borderRadius: 10,
    paddingBottom: 20,
    [theme.breakpoints.down("md")]:{
      width: "100%",
      maxWidth: "300px",
      boxShadow: "none", 
      marginTop: 0, 
      borderRadius:0, 
      marginBottom: 20,
      paddingBottom: 0,
      backgroundColor: theme.palette.primary.light,
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
  },
  label: {   
    width: "100%",
  },
  iconContainer:{
    marginRight:-15
  }
    })
);
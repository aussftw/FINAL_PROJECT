import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
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
  creditCardConteiner: {
    display: "flex",
    justifyContent: "center",
    margin: "16px 0",
  },
  creditCard: {
    padding: 16,
    position: "relative",
    background: "#333",
    border: "1px solid #454545",
    borderRadius: 25,
    zIndex: 2,
    width: 350,
    height: 240,
    marginRight: -280,
    float: "left",
    boxShadow: "10px 0 40px rgba(0,0,0,0.3)",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 200,
      marginRight: 0,
    }
  },
  paymentMethods: {
    margin: "12px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  paymentMethod: {
    marginRight: 12,
  },
  creditCardTitle: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "white",
    marginBottom: 10,
  },
  creditCardNumbersItem: {
    color: "white",
    marginRight: 10,
    width: 66,
  },
  creditCardNumbersGroup: {
    display: "flex",
    marginBottom: 10,
  },
  creditCardDataGroup: {
    display: "flex",
  },
  creditCardBox: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  creditCardDatesItem: {
    color: "white",
    marginRight: 5,
    marginLeft: 5,
    width: 47,
    "&:first-child": {
      marginLeft: 0,
    }
  },
  creditCardSpan: {
    color: "white",
    alignSelf: "center"
  },
  creditCardBack: {
    position: "relative",
    background: "#333",
    border: "1px solid #454545",
    borderRadius: 25,
    zIndex: 1,
    width: 350,
    height: 240,
    float: "left",
    // right: 10,
    boxShadow: "10px 0 40px rgba(0,0,0,0.3)",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    }

  },
  creditCardBackMagneticStripe: {
    marginTop: 25,
    display: "flex",
    height: 45,
    background: "#282828",
  },
  creditCardBackStripes: {
    marginTop: 100,
    display: "flex",
    height: 45,
    backgroundSize: "10px 10px",
    backgroundImage: "linear-gradient(#424242 50%, transparent 50%)",
  },
  creditCardCVBox: {
    position: "absolute",
    width: 55,
    bottom: 45,
    right: 10,
  },
  creditCardCVInput: {
    width: 55,
  },
  creditCardInput: {
    width: 55,
    color: "white",
    background: "#191919",
  },

}));

export default useStyles;
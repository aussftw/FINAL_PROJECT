import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

export const useStyles = makeStyles(() => ({
  first: {
    marginTop: 20,
    padding: "110px 0",
    height: "100%",
    textAlign: "center",
    backgroundImage: "url('./img/pexels-photo-305821.jpeg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  title: {
    fontSize: 50,
    fontWeight: 600,
    margin: 0,
  },

  subtitle: {
    fontSize: 24,
    color: "rgba(0,0,0,0.7)",
    letterSpacing: 0.8,
    display: "block",
  },

  second: {
    display: "flex",
    justifyContent: " space-around",
    margin: "80px 0",
  },

  text: {
    width: "38%",
  },

  flowers: {
    color: "red",
  },

  secondTitle: {
    fontSize: 38,
    lineHeight: "1.4em",
    marginBottom: 40,
  },

  secondText: {
    fontSize: 17,
    lineHeight: "29px",
    marginBottom: 40,
    color: "rgba(0,0,0,0.5)",
  },

  imgBlock: {
    width: "38%",
    backgroundImage: 'url("./img/pexels-photo-1470168.jpeg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  third: {
    backgroundColor: theme.palette.secondary.light,
    textAlign: "center",
    padding: "40px 0",
  },

  thirdTitle: {
    fontSize: 38,
    lineHeight: "1.4em",
    marginBottom: 20,
  },

  thirdSubtitle: {
    fontSize: 17,
    lineHeight: "29px",
  },

  expert: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
  },

  expertTitle: {
    fontSize: 12,
    lineHeight: "2em",
    fontWeight: 500,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    marginTop: 18,
  },

  expertName: {
    fontSize: 12,
    color: "#afafaf",
    margin: "2px 0 4px",
  },
}));

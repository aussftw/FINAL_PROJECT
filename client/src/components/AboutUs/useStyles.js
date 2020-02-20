import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  first: {
    padding: "110px 0",
    height: "100%",
    textAlign: "center",
    backgroundImage: "url('./img/pexels-photo-305821.jpeg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "right",
    },
  },

  title: {
    fontSize: 50,
    fontWeight: 600,
    margin: 0,
    fontFamily: "'Playfair Display', serif",
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
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  text: {
    width: "38%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      marginBottom: 20,
    },
  },

  flowers: {
    color: theme.palette.primary.main,
  },

  secondTitle: {
    fontSize: "2.3em",
    lineHeight: "1.4em",
    marginBottom: 40,
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "1.1px",
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7em",
    },
  },

  secondText: {
    fontSize: 17,
    lineHeight: "29px",
    marginBottom: 40,
    color: "rgba(0,0,0,0.5)",
    textAlign: "justify",
  },

  imgBlock: {
    width: "38%",
    backgroundImage: 'url("./img/pexels-photo-1470168.jpeg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: 350,
    },
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
    fontFamily: "'Playfair Display', serif",
  },

  thirdSubtitle: {
    fontSize: 17,
    lineHeight: "29px",
    width: 550,
    // display: "inline-block",
  },

  expert: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
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

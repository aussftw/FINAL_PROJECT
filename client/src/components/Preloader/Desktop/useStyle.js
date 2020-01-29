import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  outerwrapper: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    position: "relative",
    marginTop: 250,
  },
  inner: {
    position: "absolute",
    bottom: 130,
    left: -20,
    height: 90,
    width: 120,
    opacity: 1,
    transform: "translateY(146%)",
    transformOrigin: "center",
  },
  stalk: {
    position: "absolute",
    bottom: -50,
    width: 95,
    height: 124,
    opacity: 0,
    animationName: "$plant",
    animation: "2s ease-in-out infinite",
    background:
      'url("http://booky.io/models/site-templates/images/plant.png") no-repeat scroll 0 -666px transparent',
  },
  "@keyframes plant": {
    "0%": {
      top: 0,
      opacity: 0,
    },
    "70%": {
      top: "-150px",
      opacity: 1,
    },
    "90%": {
      top: "-150px",
    },
    "100%": {
      opacity: 0,
    },
  },

  leafFirst: {
    position: "absolute",
    top: -188,
    left: -71,
    width: 121,
    height: 115,
    animationName: "$leaf-left",
    animation: "2s ease-in-out infinite",
    transform: "scale(0.7)",
    transformOrigin: "right bottom",
    background:
      "url(http://booky.io/models/site-templates/images/plant.png) no-repeat",
    backgroundPosition: "0 -258px",
  },
  leafSecond: {
    position: "absolute",
    top: -269,
    left: 72,
    width: 60,
    height: 129,
    animationName: "$leaf-right",
    animation: "2s ease-in-out infinite",
    transform: "scale(0.7)",
    transformOrigin: "10px bottom",
    background:
      "url(http://booky.io/models/site-templates/images/plant.png) no-repeat",
    backgroundPosition: "0 -391px",
  },
  leafThird: {
    position: "absolute",
    top: -249,
    left: 2,
    height: 103,
    width: 73,
    opacity: 0,
    animationName: "$leaf-left-first",
    animation: "2s ease-in-out infinite",
    transform: "scale(0.7)",
    transformOrigin: "70px bottom",
    background:
      "url(http://booky.io/models/site-templates/images/plant.png) no-repeat",
    backgroundPosition: "0 -527px",
  },
  "@keyframes leaf-left-first": {
    "0%": {
      top: -100,
      opacity: 0,
      transform: "scale(0.7)",
    },
    "70%": {
      opacity: 1,
      transform: "scale(0.8)",
      top: -250,
    },
    "90%": {
      transform: "scale(0.7)",
      top: -250,
    },
    "100%": {
      opacity: 0,
      transform: "scale(0.8)",
    },
  },
  "@keyframes leaf-left": {
    "0%": {
      top: -50,
      opacity: 0,
      transform: "scale(0.7)",
    },
    "70%": {
      transform: "scale(0.8)",
      opacity: 1,
      top: -187,
    },
    "90%": {
      transform: "scale(0.7)",
      top: -187,
    },
    "100%": {
      opacity: 0,
      transform: "scale(0.8)",
    },
  },
  "@keyframes leaf-right": {
    "0%": {
      top: -120,
      opacity: 0,
      transform: "scale(0.7)",
    },
    "20%": {
      opacity: 0.3,
    },
    "70%": {
      transform: "scale(0.8)",
      top: -270,
      opacity: 1,
    },
    "90%": {
      transform: "scale(0.7)",
      top: -270,
    },
    "100%": {
      opacity: 0,
      transform: "scale(0.8)",
    },
  },
  pot: {
    position: "relative",
    width: 100,
    height: 100,
    backgroundColor: "#9c6e3f",
    boxShadow: "inset 0 -4px 1px 2px black",
    clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
  },
  leftSide: {
    display: "block",
    position: "absolute",
    width: 109,
    top: 48,
    left: -41,
    border: "3px solid #000",
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 20,
    backgroundColor: "#000",
    transform: "rotate(79deg)",
  },
  rightSide: {
    display: "block",
    position: "absolute",
    width: 109,
    top: 41,
    left: 34,
    border: "3px solid #000",
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 20,
    backgroundColor: "#000",
    transform: "rotate(102deg)",
  },

  topPot: {
    position: "absolute",
    width: 108,
    height: 12,
    top: -20,
    left: -8,
    border: "4px solid black",
    backgroundColor: "#9c6e3f",
  },
  shadow: {
    position: "absolute",
    width: 63,
    top: 40,
    left: -7,
    border: "3px solid #fff",
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    transform: "rotate(78deg)",
  },
}));

export default useStyle;

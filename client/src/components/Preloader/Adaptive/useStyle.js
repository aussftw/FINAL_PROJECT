import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    marginTop: 100,
    marginRight: "-60px",
  },
  adaptive: {
    display: "inline-block",
    width: 0,
    height: 0,
    padding: "40px 20px",
    background: "rgba(12, 241, 62, 0.2)",
    transform: "rotate(120deg)",
    "border-top-left-radius": 99,
    "border-bottom-right-radius": 99,
    animationName: "$flower",
    animation: "1s ease-in-out infinite alternate",
    "&::nth-child(odd)": {
      transform: "rotate(90deg)",
      animationDelay: "-1.5s",
    },
  },
  "@keyframes flower": {
    "0%, 10%": {
      transform: "rotate(120deg)",
    },
    "45%, 55%": {
      transform: "rotate(90deg)",
    },
    "90%, 100%": {
      transform: "rotate(72deg)",
    },
  },
}));

export default useStyle;

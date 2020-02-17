import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  imgBox: {
    display: 'inline-block',
    position: "relative",
  },
  img: {
    "object-fit": "contain",
    width: '113px',
    height: '113px',
  },
  iconClose: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",

  }
}));

export default useStyles;
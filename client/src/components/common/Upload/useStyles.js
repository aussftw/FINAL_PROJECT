import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  imgBox: {
    display: 'inline-block',
    position: "relative",
    width: '115px',
    height: '115px'
  },
  img: {
    "object-fit": "contain",
  },
}));

export default useStyles;
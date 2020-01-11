import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cartContainer: {
    maxHeight: 900,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "wrap",
  },
}));

export default useStyles;

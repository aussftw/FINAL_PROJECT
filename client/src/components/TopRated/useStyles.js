import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  topRatedContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    maxHeight: 900,
    marginBottom: 30
  },
}));

export default useStyles;

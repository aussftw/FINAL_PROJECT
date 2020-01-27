import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
  },
  allFilters: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  items: {
    marginTop: 93,
    width: "70%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "start",
  },
}));
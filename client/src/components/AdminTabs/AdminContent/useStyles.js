// import { makeStyles } from "@material-ui/core/styles";
//
// const useStyles = makeStyles(theme => ({
//   partnersItem: {
//     marginTop: "1%",
//     maxHeight: "8%",
//     display: "flex",
//     justifyContent: "space-around",
//     alignContent: "center",
//     flexWrap: "no-wrap",
//     backgroundColor: theme.palette.primary.light
//   },
//   partnersImg: {
//     // objectFit: "contain",
//     borderRadius: "20%",
//   },
// }));
//
// export default useStyles;
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 900,
    paddingTop: 30,
    paddingBottom: 30,
  },
  tabsComponent: {
    flexGrow: 1,
  },
  tabsList: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  tabText: {
    color: theme.palette.secondary.dark,
  },

}));

export default useStyles;

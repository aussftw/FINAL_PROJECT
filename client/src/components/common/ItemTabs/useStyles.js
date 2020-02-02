import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    tabsComponent: {
        flexGrow: 1,
        margin: theme.spacing(2),
    },
    tabsList: {
        color: theme.palette.primary.main,
    },
    tabText: {
        color: theme.palette.secondary.dark,
    },
    contentBox: {
        marginTop: theme.spacing(2),
    },
    descriptionText: {
        fontSize: 14,
        textAlign: "justify",
        color: theme.palette.secondary.dark,
    },
}));

export default useStyles;
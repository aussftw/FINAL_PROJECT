import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    modal: {
        position: "fixed",
        top: 10,
        left: "calc(50% - 196px)",
        minHeight: 500,
        width: 360,
        padding: theme.spacing(2),
        backgroundColor: "white",
        borderRadius: 4,
    },
    closeBtn: {
        position: "absolute",
        top: 8,
        right: 8,
    },
    input: {
        marginBottom: theme.spacing(1),
    },
    inputSmallBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
    },
    inputSmall: {
        width: 170,
        marginBottom: theme.spacing(1),
    },
}));

export default useStyles;
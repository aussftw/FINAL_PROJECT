import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    modal: {
        position: "fixed",
        top: 10,
        left: "calc(50% - 196px)",
        minHeight: 600,
        minWidth: 360,
        padding: theme.spacing(2),
        backgroundColor: "white",
        borderRadius: 4,
    },
    closeBtn: {
        position: "absolute",
        top: 8,
        right: 8,
    },
    form: {
        width: "100%",
    },
    input: {
        marginBottom: theme.spacing(1),
    },
    inputSmall: {
        width: 160,
        marginBottom: theme.spacing(1),
    }
}));

export default useStyles;
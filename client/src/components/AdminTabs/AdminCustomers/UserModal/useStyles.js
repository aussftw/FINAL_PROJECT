import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    modal: {
        position: "fixed",
        top: 10,
        left: "calc(50% - 196px)",
        minHeight: 420,
        width: 320,
        padding: theme.spacing(2),
        backgroundColor: "white",
        borderRadius: 4,
    },
    closeBtn: {
        position: "absolute",
        top: 8,
        right: 8,
    },
    message: {
        width: 280,
        padding: "16px 10px",
        margin: "0px 10px",
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        margin: "17px auto"
    }
}));

export default useStyles;
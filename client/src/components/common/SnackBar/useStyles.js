import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    snackbar: {
        backgroundColor: theme.palette.primary.main,
    },
    snackbarBox: {
        display: "flex",
    },
    snackbarMessage: {
        position: "relative",
        top: 2,
        left: 16,
        fontSize: 15,
    },
}));

export default useStyles;
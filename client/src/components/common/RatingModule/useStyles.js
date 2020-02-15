import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    rating: {
        position: "relative",
        top: "2px",
        color: theme.palette.primary.main
    },
}));

export default useStyles;
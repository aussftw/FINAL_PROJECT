import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    rating: {
        paddingBottom: theme.spacing(2),
        color: theme.palette.primary.main
    },
}));

export default useStyles;
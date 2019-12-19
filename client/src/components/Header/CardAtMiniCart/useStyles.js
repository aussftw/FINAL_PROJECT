import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    mini_cart_card: {
        display: "flex",
        margin: "0 0 10px",
        listStyle: "none",
        justifyContent: "space-between",
        textAlign: "left",
        borderBottom: "1px solid #e4e4e4",
        paddingBottom: 10,
        '&:last-child': {
            borderBottom: 0,
            paddingBottom: 0,
        },
    },
    mini_cart_card_link: {
        display: "flex",
    },
    mini_cart_card_img: {
        width: 88,
        height: 77,
        marginRight: 10,
    },
    mini_cart_card_title: {
        lineHeight: 1.5,
        color: "#707070",
        fontSize: 13,
        '&:hover' : {
            color: "#6ea820"
        }
    }
});

export default useStyles;

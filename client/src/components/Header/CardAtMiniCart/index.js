import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './useStyles';

const CardAtMiniCart = ( { url, title, qty, price,...props } ) => {
    const classes = useStyles();
    const [isAddedToCart, setAddedToCart] = useState(true);

    return (
        isAddedToCart &&
        <li className={classes.mini_cart_card}>
            <Link to="/" className={classes.mini_cart_card_link}>
                <img
                    // src={`${item.url}77/88`}
                    src={`${url}`}
                    className={classes.mini_cart_card_img} alt="img"/>
                <div>
                    <p className={classes.mini_cart_card_title}>{title}</p>
                    <p>{qty} x <span>${price.toFixed(2)}</span></p>
                </div>
            </Link>
            <div onClick={removeFromMiniCartBtn}>
                <CloseIcon fontSize="small"/>
            </div>
        </li>
    );

    function removeFromMiniCartBtn() {
        setAddedToCart(!isAddedToCart);
        // if(localStorage.getItem(`AddedToCart${id}`)){
        //     localStorage.removeItem(`AddedToCart${id}`);
        // }
    }
};

export default CardAtMiniCart;

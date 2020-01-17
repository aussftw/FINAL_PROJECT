import React, { useState } from "react";
// import axios from "axios";
import useStyles from "./useStyles";
import WishlistItem from "./WishlistItem/WishlistItem";

const list = [
  {
    imageUrls: ["img/products/Aloe.jpg", "img/products/Aloe-2.jpg"],
    quantity: 45,
    _id: "5e03df49fe7e3c01e07f57be",
    name: "aloe vera",
    currentPrice: 7.99,
    previousPrice: 9,
    productUrl: "/aloe",
  },
  {
    imageUrls: ["img/products/lavender.jpg", "img/products/lavender-2.jpg"],
    quantity: 0,
    _id: "5e04b6eca8c2961dbc2e62cd",
    name: "lavender",
    currentPrice: 12.99,
    previousPrice: 15,
    productUrl: "/lavender",
  },
  {
    imageUrls: [
      "img/products/Clusia-rosea.jpg",
      "img/products/Clusia-rosea-2.jpg",
      "img/products/Clusia-rosea-3.jpg",
      "img/products/Clusia-rosea-4.jpg",
    ],
    quantity: 60,
    _id: "5e04f38176188f27f0aa35c2",
    name: "clusia rosea princess - autograph tree",
    currentPrice: 8.8,
    productUrl: "/clusia-rosea",
  },
];

export default function WishList() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [wishlist, setWishlist] = useState(list);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //     axios
  //         .get("/wishlist")
  //         .then(res => {
  //             // eslint-disable-next-line no-console
  //             console.log(res);
  //             if (!res.data) {
  //                 setMessage("You don't have wishlist");
  //                 // eslint-disable-next-line no-console
  //                 console.log(wishlist);
  //                 return;
  //             }
  //             setWishlist(res.data.products);
  //             // eslint-disable-next-line no-console
  //             console.log(res.data.products);
  //             // eslint-disable-next-line no-console
  //             console.log(wishlist);
  //         })
  //         .catch(err => {
  //             setMessage(`Error: ${err}`);
  //         });
  // },[]);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className={classes.list}>
          {wishlist.map(item => {
            return (
              <WishlistItem
                /* eslint-disable-next-line no-underscore-dangle */
                key={item._id}
                url={item.imageUrls[0]}
                name={item.name}
                qty={item.quantity}
                price={item.currentPrice}
              />
            );
          })}
        </div>
      ) : (
        <p className={classes.message}>Your wishlist is empty</p>
      )}
      {Boolean(message) && <p className={classes.message}>{message}</p>}
    </div>
  );
}

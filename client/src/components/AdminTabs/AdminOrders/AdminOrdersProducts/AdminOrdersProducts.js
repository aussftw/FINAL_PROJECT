import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";



const AdminOrdersProducts = ({rowData}) => {

  // _id: "5e3f0d94c7f1a31134f0d3cb"
  // product: {rate: {…}, enabled: true, imageUrls: Array(2), quantity: 8, _id: "5e26ad70606bd30840d3197f", …}
  // cartQuantity: 3
  // _id: "5e3f0d94c7f1a31134f0d3cb"

  // product:
  //   rate: {rating: 4.6154, voters: 13}
  // enabled: true
  // imageUrls: (2) ["/img/products/ludisia-discolor.jpg", "/img/products/ludisia-discolor-2.jpg"]
  // quantity: 8
  // _id: "5e26ad70606bd30840d3197f"
  // name: "ludisia discolor - jewel orchid"
  // currentPrice: 18
  // categories: "Foliages"
  // color: "coloured"
  // sizes: "medium"
  // productUrl: "/ludisia-discolor"
  // description: "The Jewel Orchid is a showstopper, adored for its stunning foliage. The velvety deep purple-green leaves are lined with bright pink pinstripes, and grow densely on upright stems. The undersides of the leaves are a rich burgundy red, with a shiny texture that catches light beautifully. Like all orchid species, the Jewel Orchid flowers regularly. Jewel orchid flowers emerge in clusters along long stems that shoot out above the foliage. The flowers, small and white with bright yellow centers and pink stems, can last a month or more. Also known by its botanical name, Ludisia discolor, the Jewel Orchid is the only member of its genus, making it an entirely unique member of the orchid family, prized by houseplant collectors..↵↵The Jewel Orchid is exceptionally easy to care for, making it a great option for people just beginning to keep houseplants. It is happiest in low-medium diffused light, but is tolerant of extremely low light conditions. Mist regularly to create a humid environment, and water when the first 1 of soil feels dry."
  // itemNo: "887931"
  // date: "2020-01-21T07:51:12.537Z"
  // __v: 0

  return (
    <>
      {rowData.map((item)=>{

        return(
          <Grid container>
            {/* <Grid item xs={3} sm={3} > */}

            {/* </Grid> */}
            <Grid item xs={6} sm={6}>
              <Link to={`/products/${item.product.itemNo}`}>
                <Typography>{item.product.name}</Typography>
              </Link>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Typography>
                currentPrice={item.product.currentPrice}$
              </Typography>
              <Typography>
                x{item.cartQuantity}
              </Typography>
              <Typography>
                Sum={item.cartQuantity*item.product.currentPrice}$
              </Typography>
            </Grid>
          </Grid>
        )
      })}

    </>
  );
};

export default AdminOrdersProducts;
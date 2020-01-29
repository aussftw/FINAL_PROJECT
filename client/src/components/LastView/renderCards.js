import React from "react";

import uniqBy from "lodash/uniqBy";
// import * as _ from "lodash";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Container from "@material-ui/core/Container";

import ItemCardLite from "../ItemCardLite/ItemCardLite";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";

const RenderCards = ({ productsLV }) => {
  const classes = useStyles();
  // const newArr = uniqBy(productsLV, 'itemNo');

  if (productsLV.length > 0) {
    return (
      <Container maxWidth="lg">
        <h2 className={classes.title}>Last View</h2>
        {/* <AliceCarousel */}
        {/* responsive=
        {{
          600: {
            items: 2,
          },
          960: {
            items: 3,
          },
          1280: {
            items: 4,
          },
          1960: {
            items: 4,
          },
        }}
        buttonsDisabled autoPlay autoPlayInterval=
        {1800}
        duration=
        {600}> */}
        {productsLV
          ? uniqBy(productsLV, "itemNo")
              .slice(0, 8)
              .map(value => {
                return (
                  <ItemCardLite
                    key={`last-view-${value._id}`}
                    id={value._id}
                    itemNo={value.itemNo}
                    title={value.name}
                    rate={value.rate.rating}
                    price={value.currentPrice}
                    img={value.imageUrls[0]}
                    stock={value.quantity}
                  />
                );
              })
          : console.log("none")}
        {/* </AliceCarousel> */}
      </Container>
    );
  }

  return null;
};

export default RenderCards;

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Container from "@material-ui/core/Container";
import ItemCardLite from "../ItemCardLite/ItemCardLite";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";

const RenderCards = ({ productsLV }) => {
  const classes = useStyles();

  const gallery = productsLV.filter(
    (value, index) => index !== productsLV.length - 1
  );

  if (gallery.length) {
    return (
      <Container maxWidth="lg">
        <h2 className={classes.title}>Last View</h2>
        <AliceCarousel
          responsive={{
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
          buttonsDisabled
          autoPlay
          autoPlayInterval={1800}
          duration={600}
        >
          {gallery.map(value => {
            return (
              <ItemCardLite
                key={`last-view-${value._id}`}
                id={value._id}
                itemNo={value.itemNo}
                title={value.name}
                rate={value.rate.rating}
                price={value.currentPrice}
                oldPrice={value.previousPrice}
                img={value.imageUrls[0]}
                stock={value.quantity}
              />
            );
          })}
        </AliceCarousel>
      </Container>
    );
  }

  return null;
};

export default RenderCards;

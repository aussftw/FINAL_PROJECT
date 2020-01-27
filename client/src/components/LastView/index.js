import React, { useEffect, useState } from "react";
import * as axios from "axios";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Container from "@material-ui/core/Container";
import ItemCard from "../ItemCard/ItemCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";
import {connect} from "react-redux";
import {addToLastView} from "../../store/actions/addToLastView";



const LastViewCarousel = ({ lastView }) => {
  const classes = useStyles();
  const [productsL, setProductsL] = useState(null);

  useEffect(() => {}, []);
  console.log("1234567");

  return (
    <Container maxWidth="lg">
      <h2 className={classes.title}>Last View</h2>
      <AliceCarousel
        responsive={{
          960: {
            items: 2,
          },
          1280: {
            items: 4,
          },
          1960: {
            items: 4,
          },
        }}
        buttonsDisabled={true}
        autoPlay={true}
        autoPlayInterval={1800}
        duration={600}
      >
        {lastView
          ? lastView.slice(0, 8).map(value => {
              return (
                <ItemCard
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
          : console.log("NOPE")}
      </AliceCarousel>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    lastView: state.lastViewReducer.lastView,
  };
}

export default connect(mapStateToProps, { getLastViewVar: addToLastView })(LastViewCarousel);
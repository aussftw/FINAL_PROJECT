import React from "react";

// import uniqBy from "lodash/uniqBy";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Container from "@material-ui/core/Container";

import ItemCardLite from "../ItemCardLite/ItemCardLite";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";

const RenderCards = ({ productsLV, currentId }) => {
  const classes = useStyles();

  const inputData = productsLV;
  console.log("inputData", inputData);
  console.log("currentId", currentId);
  const inputId = inputData.map(item => {
    return item._id;
  });
  console.log("inputId", inputId);
  const sortedId = inputId;
  // sortedId.push(currentId);
  // if (inputId.includes(currentId)) {
  //   // sortedId = inputId.shift();
  //   // sortedId.push(currentId);
  //   sortedId = inputId.filter(x => x !== currentId);
  //   // sortedId = [...new Set(inputId)];
  // }
  // const sliceArr = sortedId.map((value, index) => {
  //   return index === sortedId.length - 1 ? null : value;
  // });
  // console.log("sliceArr", sliceArr);
  // eslint-disable-next-line
  let sortedObj = [];
  // if (sortedObj.length) {
  const result = sortedId.map(item => {
    const x = inputData.find(el => el._id === item);
    sortedObj.push(x);
  });
  // }

  console.log("sortedObj", sortedObj);
  console.log("sortedObjLength", sortedObj.length);
  console.log("sortedObjLength - 1", sortedObj.length - 1);
  sortedObj.map((value, index) => {
    console.log("index", index);
  });

  if (sortedObj.length) {
    return (
      <Container maxWidth="lg">
        <h2 className={classes.title}>Last View</h2>
        {/* <AliceCarousel
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
        > */}
        {sortedObj
          ? sortedObj.map((value, index) => {
              return index === sortedObj.length - 1 ? (
                ""
              ) : (
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
              // return (
              //   <ItemCardLite
              //     key={`last-view-${value._id}`}
              //     id={value._id}
              //     itemNo={value.itemNo}
              //     title={value.name}
              //     rate={value.rate.rating}
              //     price={value.currentPrice}
              //     img={value.imageUrls[0]}
              //     stock={value.quantity}
              //   />
              // );
            })
          : console.log("none")}
        {/* </AliceCarousel> */}
      </Container>
    );
  }

  return null;
};

export default RenderCards;

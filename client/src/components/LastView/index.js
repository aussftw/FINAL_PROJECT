import React, { useEffect, useState } from "react";
import * as axios from "axios";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Container from "@material-ui/core/Container";
import ItemCard from "../ItemCard/ItemCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";
import RenderCards from "./renderCards";
import {connect} from "react-redux";
import {addToLastView} from "../../store/actions/addToLastView";



const LastViewCarousel = ({ lastView }) => {
  // const classes = useStyles();
  const [productsLV, setProductsLV] = useState( []);
  //   const productsLV = [];
    // lastView = ["148884", "5269"];

    console.log(lastView);

    useEffect( () => {
        if (lastView.length > 0) {
            const lastViewArr = [];
            lastView.map(value => {
                console.log(value);
                axios
                    .get(`/api/products/${value}`)
                    .then(response => {
                        // setProductsLV(productsLV.concat((response.data)));
                        lastViewArr.push((response.data));
                        console.log(lastViewArr);
                        // let newArray = update(productsLV, {$push: [response.data]});
                        console.log(response.data);
                        setProductsLV(lastViewArr);
                        console.log(productsLV);
                    })
                    .catch(err => {
                        // eslint-disable-next-line no-console
                        console.log(err);
                    });
            })
        }

    },
         []);



  return (
    <RenderCards
    productsLV={productsLV} />
  );
};

function mapStateToProps(state) {
  return {
    lastView: state.lastViewReducer.lastView,
  };
}

export default connect(mapStateToProps, { getLastViewVar: addToLastView })(LastViewCarousel);
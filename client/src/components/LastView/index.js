import React, { useEffect, useState } from "react";
import * as axios from "axios";

import {uniq} from "lodash/uniq";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import RenderCards from "./renderCards";
import { connect } from "react-redux";
import { addToLastView } from "../../store/actions/addToLastView";

const LastViewCarousel = ({ lastView }) => {

  const [productsLV, setProductsLV] = useState([]);

  useEffect(() => {
    if (lastView.length > 0) {
      const lastViewArr = [];
      lastView.map(value => {
        axios
          .get(`/api/products/${value}`)
          .then(response => {
            lastViewArr.push(response.data);
            setProductsLV([...productsLV, ...lastViewArr]);
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.log(err);
          });
      });
    }
  }, [lastView]);
  return <RenderCards productsLV={productsLV} />;
};

function mapStateToProps(state) {
  return {
    lastView: state.lastViewReducer.lastView,
  };
}
export default connect(mapStateToProps, { getLastView: addToLastView })(LastViewCarousel);

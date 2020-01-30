import React, { useEffect, useState } from "react";
import * as axios from "axios";

import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { connect } from "react-redux";
import RenderCards from "./renderCards";
import { addToLastView } from "../../store/actions/addToLastView";

const LastViewCarousel = ({ lastView }) => {
  const [productsLV, setProductsLV] = useState([]);

  useEffect(() => {
    // console.log("lastView", lastView);
    if (lastView.length > 0) {
        const lastViewObj = {products: lastView};

        axios
            .post("/api/products/actualization", lastViewObj)
            .then(response => {
                // console.log(response.data);
                setProductsLV([...productsLV, ...response.data]);
            })
            .catch(err => {
                console.log(err);
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
export default connect(mapStateToProps, { getLastView: addToLastView })(
  LastViewCarousel
);

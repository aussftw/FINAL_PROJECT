import React, { useEffect, useState } from "react";
import * as axios from "axios";

import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { connect } from "react-redux";
import RenderCards from "./renderCards";
import { addToLastView } from "../../store/actions/addToLastView";

const LastViewCarousel = ({ lastView, currentId }) => {
  const [productsLV, setProductsLV] = useState([]);
  console.log("curreentIdinComponent", currentId);
  useEffect(() => {
    // console.log("lastView", lastView);
    if (lastView.length > 0) {
      const lastViewObj = { products: lastView };

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
    // eslint-disable-next-line
  }, [lastView]);
  return <RenderCards productsLV={productsLV} currentId={currentId} />;
};

function mapStateToProps(state) {
  return {
    lastView: state.lastViewReducer.lastView,
    currentId: state.lastViewReducer.currentId,
  };
}
export default connect(mapStateToProps, { getLastView: addToLastView })(
  LastViewCarousel
);

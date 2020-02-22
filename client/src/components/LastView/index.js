import React, { useEffect, useState } from "react";
import * as axios from "axios";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { connect } from "react-redux";
import RenderCards from "./renderCards";
import { addToLastView } from "../../store/actions/addToLastView";

const LastViewCarousel = ({ lastView, currentId }) => {
  const [productsLV, setProductsLV] = useState([]);
  useEffect(() => {
    if (lastView.length > 0) {
      axios
        .post("/api/products/actualization", { products: lastView })
        .then(response => {
          const sortData = lastView.map(item => response.data.find(el => el._id === item));
          setProductsLV(sortData);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
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

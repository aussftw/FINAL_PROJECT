import React from "react";
// import * as axios from "axios";

import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { connect } from "react-redux";
import RenderCards from "./renderCards";
import { addToLastView } from "../../store/actions/addToLastView";

const LastViewCarousel = ({ lastView }) => {
    console.log(lastView);
    return <RenderCards productsLV={lastView} />;
};

function mapStateToProps(state) {
  return {
    lastView: state.lastViewReducer.lastView,
  };
}
export default connect(mapStateToProps, { getLastView: addToLastView })(
  LastViewCarousel
);

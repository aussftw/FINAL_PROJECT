import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import * as axios from "axios";
import Container from "@material-ui/core/Container";
import Slide from "./slide";
import Preloader from "../Preloader/Desktop";

const MainCarousel = () => {
  const [slidesData, setSlidesData] = useState(null);

  useEffect(() => {
    axios.get("/api/slides").then(slides => {
      setSlidesData(slides.data);
    });
    // .catch(err => {
    //   console.log(err.response.data);
    // });
  }, []);

  return (
    <Container disableGutters>
      {!slidesData ? (
        <Preloader />
      ) : (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2500}
          stopOnHover={false}
        >
          {slidesData.map(value => {
            return (
              <Slide
                key={value._id}
                image={value.imageUrl}
                title={value.title}
                subTitle={value.description}
              />
            );
          })}
        </Carousel>
      )}
    </Container>
  );
};
export default MainCarousel;

import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import * as axios from "axios";
import Container from "@material-ui/core/Container";
import Slide from "./slide";
import Preloader from "../Preloader/Desktop";

export default function MainCarousel() {
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
    <Container maxWidth="lg">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2500}
      >
        {!slidesData ? (
          <Preloader />
        ) : (
          slidesData.map(value => {
            return (
              <Slide
                key={value.mId}
                image={value.imageUrl}
                title={value.title}
                subTitle={value.description}
              />
            );
          })
        )}
      </Carousel>
    </Container>
  );
}

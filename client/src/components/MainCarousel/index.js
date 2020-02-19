import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import * as axios from "axios";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import Slide from "./slide";
import PreloaderAdaptive from "../Preloader/Adaptive";

const MainCarousel = () => {
  const [slidesData, setSlidesData] = useState(null);
  const fakeStyle = {height: 'calc(100vw /1920 * 720)'};

  useEffect(() => {
    axios.get("/api/slides").then(slides => {
      setSlidesData(slides.data);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.response);
    });
  }, []);

  return (
    <Container disableGutters style={fakeStyle} maxWidth="xl">

      {!slidesData ? (
        <Box width="100vw">
          <PreloaderAdaptive />
        </Box>
      ) : (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2500}
          stopOnHover={false}
          style={fakeStyle}
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

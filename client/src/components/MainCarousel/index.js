import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import * as axios from "axios";
import Container from "@material-ui/core/Container";
import Slide from "./slide";
import PreloaderAdaptive from "../Preloader/Adaptive";
import useStyles from "./useStyles";
import Box from '@material-ui/core/Box';

const MainCarousel = () => {
  const [slidesData, setSlidesData] = useState(null);
  const classes = useStyles;
  const fakeStyle = {height: 'calc(100vw /1920 * 720)'};
  const fakeStyle2 = {marginTop: '-100px'};


  useEffect(() => {
    axios.get("/api/slides").then(slides => {
      setSlidesData(slides.data);
    });
    // .catch(err => {
    //   console.log(err.response.data);
    // });
  }, []);

  return (
    <Container disableGutters style={fakeStyle} maxWidth="xl">

      {!slidesData ? (
          <Box width="100vw" style={fakeStyle2}>
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

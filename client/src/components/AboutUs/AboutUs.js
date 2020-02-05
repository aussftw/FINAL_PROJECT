import React from "react";
import { useStyles } from "./useStyles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.first}>
        <h2 className={classes.title}>About Us</h2>
        <span className={classes.subtitle}>
          Where plants are our inspiration
        </span>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            We take
            <span className={classes.flowers}> flowers </span>
            personally & we bring you happiness ring you happiness
          </h2>
          <p className={classes.secondText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec.
          </p>
          <img src="./img/h2-sign-img.png" alt="logo" />
        </div>
        <div className={classes.imgBlock} />
      </div>
      <div className={classes.third}>
        <h2 className={classes.thirdTitle}>Plants Experts</h2>
        <span className={classes.thirdSubtitle}>
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </span>
        <div className={classes.expert}>
          <div>
            <img src="./img/h3-team-img-1.png" alt="" />
            <h3 className={classes.expertTitle}>CRYSTAL BROOKS</h3>
            <span className={classes.expertName}>Florist</span>
          </div>
          <div>
            <img src="./img/h3-team-img-2.png" alt="" />
            <h3 className={classes.expertTitle}>SHIRLEY HARRIS</h3>
            <span className={classes.expertName}>Manager</span>
          </div>
          <div>
            <img src="./img/h3-team-img-3.png" alt="" />
            <h3 className={classes.expertTitle}>BEVERLY CLARK</h3>
            <span className={classes.expertName}>Florist</span>
          </div>
          <div>
            <img src="./img/h3-team-img-4.png" alt="" />
            <h3 className={classes.expertTitle}>AMANDA WATKINS</h3>
            <span className={classes.expertName}>Florist</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

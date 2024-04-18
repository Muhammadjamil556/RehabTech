import React from "react";
import Slider from "react-slick";
import image from "../../assets/physiotherapy-and-rehabilitation-background-vector.jpg";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

function AutoPlay() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Box pb={4}>
        <Slider {...settings}>
          <div>
            <img className={classes.pic} src={image} />
          </div>
        </Slider>
      </Box>
    </div>
  );
}

export default AutoPlay;

const useStyles = makeStyles(() => ({
  pic: {
    height: "88vh",
  },
}));

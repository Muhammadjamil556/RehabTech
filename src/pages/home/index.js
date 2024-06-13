import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import backImage from "../../assets/therapy.jpg";
import Testimonials from "../../components/testimonial";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
        }}
      >
        <Box className={classes.textContainer}>
          <h1 className={classes.heading}>
            Online PhysioTherapy with Rehab Tech
          </h1>
          <Box>
            <h3 className={classes.subHeading}>
              Start Feeling Better In As Few As 3 Visits.
            </h3>
          </Box>
        </Box>
      </Box>

      <Box>
        <Testimonials />
      </Box>
    </div>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: "flex",
    flexDirection: "column",
    height: "88vh",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  },
  heading: {
    margin: 9,
    color: theme.palette.common.white,
    fontSize: "3rem",
  },
  subHeading: {
    margin: 5,
    color: theme.palette.common.white,
    fontSize: "2rem",
  },
}));

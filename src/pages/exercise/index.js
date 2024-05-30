import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ExercisesDataMap from "../../components/exercise card/exercisesDataMap";

const ExercisePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.textFont}>
      <Box className={classes.imageContainer}></Box>
      <Box className={classes.flexContainer}>
        <Box className={classes.textContainer}>
          <h1 className={classes.heading}>PHYSIOTHERAPHY EXERCISES</h1>
          <p className={classes.subHeading}>
            <span className={classes.spanText}>
              NHS approved physio exercises and rehab exercises you <br /> can
              do at home or in the gym.
            </span>
          </p>
        </Box>
      </Box>
      <div className={classes.root}>
        <div className={classes.title}>
          PHYSIOTHERAPY EXERCISES & TECHNIQUES
        </div>
        <div className={classes.text}>
          Physiotherapy exercises are an effective way to improve and prevent
          conditions affecting the joints, muscles, and soft tissues. People of
          all ages can benefit from targeted physio exercises to relieve their
          painful symptoms caused by injury, illness and disability.
        </div>
        <div className={classes.text}>
          If you are struggling with an injury or painful condition that affects
          your daily life, don’t just cover it up with painkillers, treat the
          pain at its source. Physiotherapy is a fundamental part of NHS
          treatment, and most of the time is the best thing you can do to
          resolve your problem.
        </div>
        <div className={classes.text}>
          Whilst it’s important that you see a physiotherapist for personalised
          treatment, there are some physio exercises you can do at home in the
          meantime to relieve your pain and strengthen weakened areas.
        </div>
      </div>

      <Box>
        <ExercisesDataMap />
      </Box>
    </div>
  );
};

export default ExercisePage;

const useStyles = makeStyles((theme) => ({
  textFont: { fontFamily: "Raleway, sans-serif" },
  imageContainer: {
    padding: "230px 0px 150px 0px",
    backgroundImage:
      "url(https://responsephysio.com/wp-content/uploads/2021/05/physioexercise.jpg)",
    height: "254px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: ".9",
    "&::before": {
      content: "''",
      height: "80%",
      width: "100%",
      position: "absolute",
      top: 94,
      left: 0,
      backgroundColor: "#525252",
      zIndex: -1,
      opacity: ".7",
    },
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "32px",
    letterSpacing: "3.7px",
    padding: "0px 0px 0px 10px",
  },
  subHeading: {
    fontSize: "1.25rem",
    letterSpacing: "1.8px",
    lineHeight: "36px",
  },
  spanText: {
    fontWeight: 300,
  },

  textContainer: {
    width: "100%",
    fontFamily: "Raleway, sans-serif",
    position: "absolute",
    bottom: 300,
    color: theme.palette.common.white,
    textAlign: "center",
  },

  root: {
    textAlign: "center",
    padding: "100px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "2.5px",
    lineHeight: "40px",
    color: "#525252",
  },
  text: {
    fontSize: ".875rem",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#525252",
    marginBottom: "1rem",
    letterSpacing: "1px",
    padding: "0px 80px",
  },
}));

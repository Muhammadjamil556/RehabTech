import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ExercisesDataMap from "../../components/exercise card/exercisesDataMap";

const ExercisePage = () => {
  const classes = useStyles();
  return (
    <div>
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

      <Box>
        <ExercisesDataMap />
      </Box>
    </div>
  );
};

export default ExercisePage;

const useStyles = makeStyles((theme) => ({
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
      height: "86%",
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
}));

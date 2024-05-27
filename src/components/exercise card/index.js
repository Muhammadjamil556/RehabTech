import React from "react";
import { makeStyles } from "@mui/styles";
import ankleFootImage from "../../assets/ankle.jpg";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#fff",
    borderRadius: 1,
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: 430,
    overflow: "hidden",
    fontFamily: "Raleway, sans-serif",
  },
  imageContainer: {
    position: "relative",
    minHeight: "395px",
    backgroundImage: `url(${ankleFootImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0,
    transition: ".3s ease",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: "1.25rem",
    border: "2px solid white",
    padding: "8px 16px",
  },
  imageContainerHover: {
    "&:hover $imageContainer": {
      transform: "scale(1.1)",
    },
    "&:hover $overlay": {
      opacity: 1,
    },
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    textTransform: "uppercase",
    fontSize: ".9rem",
    letterSpacing: "1.5px",
    lineHeight: "24px",
    color: "#525252",
    marginBottom: ".75rem",
  },
  cardDescription: {
    fontSize: ".9rem",
    letterSpacing: "1.5px",
    lineHeight: "24px",
    color: "#555",
    fontWeight: "500 !important",
  },
}));

const ExercisesListCard = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div
        className={`${classes.imageContainer} ${classes.imageContainerHover}`}
      >
        <div className={classes.overlay}>
          <div className={classes.overlayText}>VIEW EXERCISES</div>
        </div>
      </div>
      <div className={classes.cardContent}>
        <h2 className={classes.cardTitle}>ANKLE & FOOT PAIN EXERCISES</h2>
        <p className={classes.cardDescription}>
          View exercises to relieve injuries and conditions affecting the ankle
          and foot; including fractures, Achilles tendonitis, arthritis and
          sprains.
        </p>
      </div>
    </div>
  );
};

export default ExercisesListCard;

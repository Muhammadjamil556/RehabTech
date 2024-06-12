import React from "react";
import { makeStyles } from "@mui/styles";

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

const ExercisesListCard = ({ description, id, image, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div
        className={`${classes.imageContainer} ${classes.imageContainerHover}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={classes.overlay}>
          <div className={classes.overlayText}>VIEW EXERCISES</div>
        </div>
      </div>
      <div className={classes.cardContent}>
        <h2 className={classes.cardTitle}>{title}</h2>
        <p className={classes.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ExercisesListCard;

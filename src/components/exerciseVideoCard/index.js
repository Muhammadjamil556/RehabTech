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
  iframeContainer: {
    position: "relative",
    minHeight: "395px",
    overflow: "hidden",
    "& iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
    },
  },
  iframeContainerHover: {
    "&:hover $iframeContainer": {
      transform: "scale(1.1)",
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

const ExercisesListCard = ({ description, video }) => {
  const classes = useStyles();
  const videoId = video.split("/").pop();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className={classes.card}>
      <div
        className={`${classes.iframeContainer} ${classes.iframeContainerHover}`}
      >
        <iframe src={embedUrl} title="exercise" />
      </div>
      <div className={classes.cardContent}>
        <p className={classes.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ExercisesListCard;

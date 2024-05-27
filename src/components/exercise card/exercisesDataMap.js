import React from "react";
import data from "./data";
import ExercisesListCard from "./index";
import { makeStyles } from "@mui/styles";

const ExercisesDataMap = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data.map((card, index) => (
        <ExercisesListCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default ExercisesDataMap;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "30px 0px",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
}));

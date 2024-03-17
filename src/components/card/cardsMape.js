import React from "react";
import { data } from "./data";
import PropertiesCard from ".";
import { makeStyles } from "@mui/styles";
const CardsMape = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data.map((item, i) => (
        <PropertiesCard {...item} />
      ))}
    </div>
  );
};

export default CardsMape;

const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "10px",
    padding: "20px",
  },
}));

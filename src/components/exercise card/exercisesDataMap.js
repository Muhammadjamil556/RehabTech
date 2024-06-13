import React, { useEffect, useState } from "react";
import ExercisesListCard from "./index";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const ExercisesDataMap = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleData = async () => {
    try {
      const res = await axios.get(
        "https://rehabtech-backend.vercel.app/api/v1/all-exercise"
      );
      setData(res.data.response);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {loader ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data?.map(({ description, id, image, title }, index) => (
          <ExercisesListCard
            id={id}
            key={index}
            image={image}
            title={title}
            description={description}
          />
        ))
      )}
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

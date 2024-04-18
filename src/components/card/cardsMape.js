import React from "react";
import PropertiesCard from ".";
import { makeStyles } from "@mui/styles";
import axios from "../../axios";
import { useState, useEffect } from "react";
const CardsMape = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isError, setError] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("/api/v1/all-medicines");
      setData(res.data.response);
      console.log(res.data.response);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      {isError !== "" && <h1>{isError}</h1>}
      <div className={classes.container}>
        {data.map((item, index) => (
          <PropertiesCard {...item} />
        ))}
      </div>
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

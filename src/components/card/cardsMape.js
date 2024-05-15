import React from "react";
import PropertiesCard from "./index";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../feature/actions";
import { Box } from "@mui/material";

const CardsMape = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state, "state");

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (state.product.isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <div className={classes.container}>
        {state.product.data &&
          state.product.data.map((item, index) => <PropertiesCard {...item} />)}
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

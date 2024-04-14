import React from "react";
import CardsMape from "../../components/card/cardsMape";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StaticSearchBar from "../../components/search";

const Medicine = () => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <StaticSearchBar />
      </Box>

      <Box className={classes.cardContainer}>
        <CardsMape />
      </Box>
    </div>
  );
};

export default Medicine;

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: "70px",
    [theme.breakpoints.down("md")]: { margin: 0 },
  },
}));

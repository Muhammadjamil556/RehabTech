import React from "react";

import image1 from "../../assets/physiotherapy-and-rehabilitation-background-vector.jpg";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

export const Registration = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.module}>
          <div className={classes.moduleContainer}>
            <div className={classes.leftModule}>
              <h2 className={classes.heading}>welcome</h2>
              <form>
                <input placeholder="name" type="text" />
              </form>
            </div>
            <Box className={classes.rightModule}>
              <img className={classes.imgContainer} src={image1} />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid black ",
  },
  module: {},
  moduleContainer: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
    position: "absolute",
    maxWidth: "50vw",
    width: "100%",
    height: "50vh",
    top: "25%",
    left: "25%",
  },
  imgContainer: {
    maxWidth: "350px",
    width: "100%",
    maxHeight: "50vh",
    height: "100%",
    borderRadius: "0px 3px 3px 0px",
  },
}));

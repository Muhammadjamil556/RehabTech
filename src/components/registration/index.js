import React from "react";

import image1 from "../../assets/physiotherapy-and-rehabilitation-background-vector.jpg";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Registration = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.module}>
          <div className={classes.moduleContainer}>
            <div className={classes.leftModule}>
              <h2 className={classes.heading}>Registration for Rehab Tech</h2>
              <form>
                <div className={classes.formContainer}>
                  <Box className={classes.inputBlock}>
                    <label>Name</label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className={classes.inputField}
                    />
                  </Box>

                  <Box className={classes.inputBlock}>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      id="email"
                      placeholder="Email"
                      className={classes.inputField}
                    />
                  </Box>
                  <Box className={classes.inputBlock}>
                    <label>Password</label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className={classes.inputField}
                    />
                  </Box>

                  <Box className={classes.inputBlock}>
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      className={classes.inputField}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2">
                      Want to register with gmail?
                    </Typography>
                    <Button
                      sx={{ background: "grey", margin: "10px 0px" }}
                      variant="contained"
                    >
                      Register
                    </Button>
                  </Box>

                  <Box sx={{ margin: "50px 0px 0px 0px", textAlign: "center" }}>
                    <Typography variant="body2">
                      Already have an account?
                      <Link
                        to="/login"
                        href="https://www.w3schools.com"
                        className={classes.aTag}
                      >
                        Sign in now{" "}
                      </Link>
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="center"
                    sx={{ margin: "20px 0px" }}
                  >
                    <Link to="/home" className={classes.aTag}>
                      <Button
                        sx={{ background: "grey", margin: "10px 0px" }}
                        variant="contained"
                      >
                        cancel{" "}
                      </Button>
                    </Link>
                  </Box>
                </div>
              </form>
            </div>
            <Box className={classes.rightModule}>
              <img className={classes.imgContainer} src={image1} alt="pic" />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#efedee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(96, 95, 95)",
  },
  module: {
    width: "100%",
    // height: '60px',  // Commented out height property
    background: "rgba(51, 51, 51, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.4s",
  },
  moduleContainer: {
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
    display: "flex",
    maxWidth: "60vw",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    position: "absolute",
    transitionDuration: "0.3s",
    background: "#fff",
  },
  heading: {
    fontWeight: 400,
  },
  imgContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "0px 3px 3px 0px",
    objectFit: "cover",
  },

  rightModule: {
    overflow: " hidden",
    flex: 2,
  },
  leftModule: {
    flex: 2,
    padding: "20px 20px 20px",
    opacity: 1,
    transitionDuration: "0.5s",
  },
  inputBlock: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "8px",
    marginBottom: "20px",
  },

  inputField: {
    outline: 0,
    border: 0,
    padding: "4px 0 0",
    fontSize: "15px",
    color: "rgb(132, 131, 132)",
    opacity: 1,
    "&::-moz-placeholder": { color: "#ccc", opacity: 1 },
    "&:-ms-input-placeholder": { color: "#ccc", opacity: 1 },
    "&::placeholder": { color: "#ccc", opacity: 1 },
    "&:focus-within": { borderColor: "#8c7569" },
    "&focus-within .input-label": { color: "rgba(140, 117, 105, 0.8)" },
  },
  aTag: {
    textDecoration: "none",
    color: "#55311c",
  },
}));

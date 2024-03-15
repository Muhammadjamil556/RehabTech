import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Screenshot from 2024-03-14 15-25-31.png";
import CustomButton from "../../units/buttons";
// import { toggleModal } from "../../redux/login/login.slicer";
// import { useDispatch } from "react-redux";

export default function Header() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const openLoginModal = () => {
  //   dispatch(toggleModal(true));
  // };
  return (
    <div className={classes.headerMain}>
      <div className={classes.imageBox}>
        <Link to="/" className={classes.links}>
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={classes.linkcont}>
        <Link to="/Physiotherapist-Consultation" className={classes.links}>
          Physiotherapist Consultation
        </Link>
        <Link to="/Medicine-store" className={classes.links}>
          Medicine store
        </Link>
        <Link to="/Exercises" className={classes.links}>
          Exercises
        </Link>
        <Link to="/Pose-detection" className={classes.links}>
          Pose Detection
        </Link>
        <Link to="/News" className={classes.links}>
          News
        </Link>

        <span className={classes.links}></span>
      </div>
      <div className={classes.btncont}>
        <CustomButton variant="outlined">
          {/* onClick={openLoginModal} */} Register/Login
        </CustomButton>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  headerMain: {
    display: "grid",
    gridTemplateColumns: "5fr 6fr 1fr auto",
    alignItems: "center",
    columnGap: "40px",
    position: "sticky",
    padding: "0px 29px 0px 69px",
    backgroundColor: theme.palette.background.footer,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 6fr  5fr",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gridTemplateColumns: "1fr",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  links: {
    color: theme.palette.common.white,
    textDecoration: "none",
    cursor: "pointer",
  },
  logo: {
    width: "100px",
    height: "90px",
  },
  linkcont: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  imageBox: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  btncont: {
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Screenshot from 2024-03-14 15-25-31.png";
import CustomButton from "../../units/buttons";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, MenuItem } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

// import { toggleModal } from "../../redux/login/login.slicer";
// import { useDispatch } from "react-redux";

export default function Header() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const openLoginModal = () => {
  //   dispatch(toggleModal(true));
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  // };
  return (
    <div className={classes.headerMain}>
      <div className={classes.imageBox}>
        <Link to="/" className={classes.links}>
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={classes.linkCont}>
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
      </div>
      <div className={classes.btnCont}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          sx={{ width: "50px", color: (theme) => theme.palette.common.white }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {isAuthenticated && (
          <div>
            <img
              className={classes.avatar}
              src={user.picture}
              alt={user.name}
            />
          </div>
        )}
        {isAuthenticated ? (
          <CustomButton
            variant="contained"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </CustomButton>
        ) : (
          <CustomButton variant="contained" onClick={() => loginWithRedirect()}>
            Log In
          </CustomButton>
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  headerMain: {
    display: "grid",
    gridTemplateColumns: "5fr 6fr 3fr auto",
    alignItems: "center",
    columnGap: "40px",
    position: "sticky",
    padding: "0px 29px 0px 69px",
    backgroundColor: theme.palette.background.footer,
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
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
    padding: "5px",
  },
  logo: {
    width: "100px",
    height: "90px",
  },
  linkCont: {
    display: "flex",
    alignItems: "center",
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
  avatar: { width: 40, height: 40, borderRadius: "50%" },
  btnCont: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

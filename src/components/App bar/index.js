import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/phsiotherapy.jpg";
import CustomButton from "../../units/buttons";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAuth0 } from "@auth0/auth0-react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Box,
} from "@mui/material";
import { AccountCircle, PowerSettingsNew } from "@mui/icons-material";

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null); // For account menu
  const [anchorElNotifications, setAnchorElNotifications] = useState(null); // For notifications menu
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClickNotifications = (newPlacement) => (event) => {
    setAnchorElNotifications(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

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
      {isAuthenticated && (
        <Box>
          <IconButton
            onClick={handleClickNotifications("top-end")} // Pass the placement for notifications
            size="large"
            aria-label="show 17 new notifications"
            sx={{ width: "50px", color: (theme) => theme.palette.common.white }}
          >
            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
      )}
      {!isAuthenticated && (
        <CustomButton variant="contained" onClick={() => loginWithRedirect()}>
          Log in
        </CustomButton>
      )}
      {isAuthenticated && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent=" "
            >
              <Avatar alt={user.name} src={user.picture} />
            </Badge>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={user.name} />
            </MenuItem>
            <MenuItem onClick={() => logoutWithRedirect()}>
              <ListItemIcon>
                <PowerSettingsNew fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </MenuItem>
          </Menu>
        </div>
      )}
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorElNotifications}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ width: 320, height: 380, marginTop: 1 }}>
              {isAuthenticated && (
                <Box sx={{ display: "flex" }}>
                  <Avatar alt={user.name} src={user.picture} />
                  <Typography>{user.name} you have been log in</Typography>
                </Box>
              )}
            </Paper>
          </Fade>
        )}
      </Popper>{" "}
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

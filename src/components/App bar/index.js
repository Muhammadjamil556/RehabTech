import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
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
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Box,
} from "@mui/material";
import { AccountCircle, PowerSettingsNew } from "@mui/icons-material";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  headerMain: {
    display: "grid",
    gridTemplateColumns: "5fr 6fr 1fr auto",
    alignItems: "center",
    columnGap: theme.spacing(5),
    position: "sticky",
    padding: theme.spacing(0, 4),
    backgroundColor: theme.palette.background.footer,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 6fr 5fr",
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
    padding: theme.spacing(0.5),
  },
  logo: {
    width: 100,
    height: 90,
  },
  linkCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  notification: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      transition: "all .25s ease",
      boxShadow: "0 8px 8px -4px lightblue",
    },
  },
  imageBox: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
  btnCont: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuContainer: {
    top: "50 !important",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleNotificationsClick = (newPlacement) => (event) => {
    setAnchorElNotifications(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
    toast.success("Logout Successful");
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login Successful");
    }
  }, [isAuthenticated]);

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
      {isAuthenticated ? (
        <>
          <Box>
            <IconButton
              onClick={handleNotificationsClick("top-end")}
              size="large"
              aria-label="show new notifications"
              sx={{
                width: "50px",
                color: "white",
              }}
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuClick}
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
              onClose={handleCloseMenu}
              className={classes.menuContainer}
            >
              <MenuItem onClick={handleCloseMenu}>
                <ListItemIcon>
                  <AccountCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={user.name} />
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <PowerSettingsNew fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </MenuItem>
            </Menu>
          </div>
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
                  <Box className={classes.notification} padding="0px 15px">
                    <Avatar alt={user.name} src={user.picture} />
                    <p>
                      <strong>{user.name}, you have logged in</strong>
                    </p>
                  </Box>
                </Paper>
              </Fade>
            )}
          </Popper>
        </>
      ) : (
        <CustomButton
          variant="contained"
          onClick={loginWithRedirect}
        >
          Log in
        </CustomButton>
      )}
    </div>
  );
}

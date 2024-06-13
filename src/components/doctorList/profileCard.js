import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    marginRight: theme.spacing(2),
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: "#FFA500 ",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#e69500 !important",
    },
  },
}));

const ProfileCard = ({ name, title, qualification, experience, image }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Appointment");
  };
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent className={classes.content}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {qualification}
        </Typography>
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", marginTop: "0.5rem" }}
        >
          {experience}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Experience
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        className={classes.button}
        onClick={handleButtonClick}
      >
        Book Appointment
      </Button>
    </Card>
  );
};

export default ProfileCard;

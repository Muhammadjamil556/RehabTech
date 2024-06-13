import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    display: "flex",
    width: "900px", // Increased width
    height: "500px", // Increased height
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  leftPane: {
    padding: "24px", // Increased padding
    borderRight: "1px solid #ccc",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  rightPane: {
    padding: "24px", // Increased padding
    width: "60%",
  },
  avatar: {
    height: "100px !important",
    width: "100px !important",
    marginBottom: theme.spacing(2),
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "24px", // Increased margin
  },
  scheduleButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  cancelButton: {
    color: "#007BFF",
    borderColor: "#007BFF",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
}));

const AppointmentPage = () => {
  const classes = useStyles();

  const handleScheduleMeeting = () => {
    toast.success("Schedule Request sent sucessfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <div className={classes.leftPane}>
          <Avatar
            className={classes.avatar}
            src="path/to/image.jpg"
            alt="Vikash Rathee"
          />
          <Typography variant="h6">Vikash Rathee</Typography>
          <Typography variant="subtitle1">Product demo</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            🕒 30 minutes
          </Typography>
          <Typography variant="body2" gutterBottom>
            Speak with our physiotherapist for a 15-minute 1:1 session to
            address your specific needs and requirements.
          </Typography>
          <Typography variant="body2">
            📍 Google Meet - It's an online Google Meet meeting and you will
            receive meeting joining link on your email.
          </Typography>
        </div>
        <div className={classes.rightPane}>
          <Typography variant="h6" gutterBottom>
            Wednesday, June 16, 2021, 10:00 am (IST +05:30)
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Invitee Question's
          </Typography>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            margin="normal"
          />

          <Box className={classes.buttonGroup}>
            <Button
              variant="contained"
              className={classes.scheduleButton}
              onClick={handleScheduleMeeting}
            >
              Schedule this meeting
            </Button>
            <Button variant="outlined" className={classes.cancelButton}>
              Cancel
            </Button>
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default AppointmentPage;

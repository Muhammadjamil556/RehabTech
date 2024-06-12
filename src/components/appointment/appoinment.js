import React, { useState } from "react";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(4),
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  profileContainer: {
    paddingRight: theme.spacing(4),
    borderRight: "1px solid #ccc",
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  calendarContainer: {
    padding: theme.spacing(2),
  },
  timesContainer: {
    marginTop: theme.spacing(2),
  },
  timeButton: {
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  timezoneContainer: {
    marginTop: theme.spacing(2),
  },
  mainContent: {
    flex: 1,
    paddingLeft: theme.spacing(4),
  },
}));

function Appointment() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(dayjs("2021-06-16"));
  const [timezone, setTimezone] = useState("Asia/pakistan");
  const times = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
  ];

  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box className={classes.profileContainer}>
            <Avatar
              className={classes.avatar}
              src="https://via.placeholder.com/150"
              alt="Vikash Rathee"
            />
            <Typography variant="h6">Vikash Rathee</Typography>
            <Typography variant="subtitle1">Physiotherapy Session</Typography>
            <Typography variant="body2">30 minutes</Typography>
            <Typography variant="body2">
              Speak with our physiotherapist for a 15-minute 1:1 session to
              address your specific needs and requirements.
            </Typography>
            <Typography variant="body2" style={{ marginTop: "16px" }}>
              <span role="img" aria-label="video">
                📹
              </span>{" "}
              Google Meet - It’s an online Google Meet meeting and you will
              receive meeting joining link on your email
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box className={classes.mainContent}>
            <Typography variant="h5">Select a Date & Time</Typography>
            <Paper elevation={3} className={classes.calendarContainer}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  date={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </LocalizationProvider>
            </Paper>
            <Typography variant="h6" style={{ marginTop: "16px" }}>
              {selectedDate.format("MMMM D, YYYY")}
            </Typography>
            <Box className={classes.timesContainer}>
              {times.map((time) => (
                <Button
                  key={time}
                  variant="outlined"
                  className={classes.timeButton}
                >
                  {time}
                </Button>
              ))}
            </Box>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.timezoneContainer}
            >
              <InputLabel id="timezone-label">Select Time Zone</InputLabel>
              <Select
                labelId="timezone-label"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                label="Select Time Zone"
              >
                <MenuItem value="Asia/pakistan">
                  Asia/pakistan (UTC+05:00)
                </MenuItem>
                {/* Add more time zones as needed */}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Appointment;

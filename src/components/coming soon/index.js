import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
  },
  header: {
    backgroundColor: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
  },
  countdown: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
  countdownItem: {
    margin: "0 10px",
  },
  countdownSpan: {
    fontSize: 24,
    fontWeight: "bold",
  },
}));

function ComingSoon() {
  const classes = useStyles();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the launch date
  const launchDate = new Date("2024-12-31T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Coming Soon</h1>
        <div className={classes.countdown}>
          <div className={classes.countdownItem}>
            <span className={classes.countdownSpan}>{countdown.days}</span>
            <p>Days</p>
          </div>
          <div className={classes.countdownItem}>
            <span className={classes.countdownSpan}>{countdown.hours}</span>
            <p>Hours</p>
          </div>
          <div className={classes.countdownItem}>
            <span className={classes.countdownSpan}>{countdown.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className={classes.countdownItem}>
            <span className={classes.countdownSpan}>{countdown.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ComingSoon;

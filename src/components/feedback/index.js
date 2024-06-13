import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(2),
  },
  formContainer: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "1200px", // Increased width
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden", // Ensure rounded corners work
  },

  leftSide: {
    flex: 1,
    padding: theme.spacing(8),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://thomasdigital.com/wp-content/uploads/2017/09/giving-feedback.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Adding a text shadow
  },
  rightSide: {
    flex: 1,
    padding: theme.spacing(8), // Increased padding
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: "3rem", // Increased font size
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: theme.spacing(2),
  },
  description: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: "1.2rem", // Increased font size
    lineHeight: 1.6,
    marginBottom: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginBottom: "15px !important",
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#333",
    },
    fontWeight: "bold",
    padding: theme.spacing(1.5, 0),
  },
  tabs: {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: theme.spacing(2),
  },
  tab: {
    fontWeight: "bold",
    minWidth: "50%",
  },
}));

const Forms = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.formContainer}>
        <div className={classes.leftSide}>
          <Typography variant="h1" className={classes.title}>
            {activeTab === 0 ? "FORM YOUR STORY." : "REPORT A PROBLEM."}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {activeTab === 0
              ? "In the variety of choices, you may not know what you need. We can help. Drop us a line and we will be in touch."
              : "If you encounter any issues, please let us know. Your feedback helps us improve our service."}
          </Typography>
        </div>
        <div className={classes.rightSide}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            className={classes.tabs}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Feedback" className={classes.tab} />
            <Tab label="Report a Problem" className={classes.tab} />
          </Tabs>
          {activeTab === 0 && (
            <form
              className={classes.form}
              action="/submit_feedback"
              method="post"
            >
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                required
                className={classes.textField}
                fullWidth
              />
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                required
                className={classes.textField}
                fullWidth
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                className={classes.textField}
                fullWidth
              />
              <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
                className={classes.textField}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                fullWidth
              >
                SHARE YOUR FEEDBACK
              </Button>
            </form>
          )}
          {activeTab === 1 && (
            <form
              className={classes.form}
              action="/report_problem"
              method="post"
            >
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                required
                className={classes.textField}
                fullWidth
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                className={classes.textField}
                fullWidth
              />
              <TextField
                id="problem"
                name="problem"
                label="Problem Description"
                multiline
                rows={4}
                variant="outlined"
                required
                className={classes.textField}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                fullWidth
              >
                REPORT PROBLEM
              </Button>
            </form>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default Forms;

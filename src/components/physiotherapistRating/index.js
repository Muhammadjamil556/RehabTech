import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: theme.spacing(4),
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.shape.borderRadius,
    maxWidth: 500,
  },
  title: {
    marginBottom: theme.spacing(2),
    color: "#333",
    textAlign: "center",
  },
  rating: {
    marginBottom: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#333",
    },
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

const RatingPage = () => {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the rating and feedback data to your backend or perform other actions
    // Reset the form
    setRating(0);
    setFeedback("");
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.formContainer}>
        <Typography variant="h4" className={classes.title}>
          Rate Your Experience
        </Typography>
        <div className={classes.rating}>
          <Rating
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            precision={0.5}
          />
        </div>
        <TextField
          id="feedback"
          name="feedback"
          label="Feedback"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit Rating
        </Button>
      </Box>
    </Container>
  );
};

export default RatingPage;

import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Avatar, Grid, Container, Paper } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    padding: "4rem 0",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },
  header: {
    marginBottom: "2rem",
    color: "#2E7D32",
    fontWeight: "bold !important",
    fontSize: "3.2rem !important", // Ensure heading style
  },
  subheader: {
    marginBottom: "3rem",
    color: "#333",
    fontSize: "1.2rem !important",
    textAlign: "center",
  },
  testimonialContainer: {
    display: "flex",
    justifyContent: "center",
  },
  testimonial: {
    padding: "2rem",
    margin: "1rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    maxWidth: "350px",
    textAlign: "left",
    transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    },
  },
  avatar: {
    width: "80px !important", // Ensure avatar size
    height: "80px !important",
    marginBottom: "1rem",
    margin: "0 auto",
    border: "7px solid lightgray",
  },
  name: {
    marginTop: "1rem",
    color: "#2E7D32",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.2rem !important", // Ensure name style
  },
  position: {
    color: "#757575",
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1rem !important", // Ensure position style
  },
  quote: {
    fontStyle: "italic",
    color: "#555",
    position: "relative",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    "&:before": {
      content: '"“"',
      position: "absolute",
      left: "-0.5rem",
      top: "-0.5rem",
      fontSize: "2rem",
      color: "#2E7D32",
    },
    "&:after": {
      content: '"”"',
      position: "absolute",
      right: "2.5rem",
      bottom: "-1.4rem",
      fontSize: "2rem",
      color: "#2E7D32",
    },
  },
}));

const testimonials = [
  {
    name: "Nat Reynolds",
    position: "Chief Accountant",
    quote:
      "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Celia Almeda",
    position: "Secretary",
    quote:
      "Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Bob Roberts",
    position: "Sales Manager",
    quote:
      "Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        What Clients Say
      </Typography>
      <Typography variant="subtitle1" className={classes.subheader}>
        We place huge value on strong relationships and have seen the benefit
        they bring to our business. Customer feedback is vital in helping us to
        get it right.
      </Typography>
      <Grid container spacing={4} className={classes.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper className={classes.testimonial}>
              <Avatar src={testimonial.avatar} className={classes.avatar} />
              <Typography variant="h6" className={classes.name}>
                {testimonial.name}
              </Typography>
              <Typography variant="subtitle2" className={classes.position}>
                {testimonial.position}
              </Typography>
              <Typography variant="body1" className={classes.quote}>
                {testimonial.quote}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;

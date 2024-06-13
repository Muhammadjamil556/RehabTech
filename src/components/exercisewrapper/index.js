import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExercisesListCard from "../exerciseVideoCard";

const ExercisePag = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState();
  const { id } = useParams();
  const classes = useStyles();

  const handleExercisesDetails = async () => {
    const res = await axios.get(
      `https://rehabtech-backend.vercel.app/api/v1/all-exercise/` + id
    );
    console.log(res, "dattttttaa");
    if (res) {
      setLoader(true);
      setData(res.data.response);
    }
  };

  useEffect(() => {
    handleExercisesDetails();
  }, [id]);

  if (!loader) return <CircularProgress />;
  return (
    <div className={classes.textFont}>
      <Box
        className={classes.imageContainer}
        sx={{
          backgroundImage: `url(${data.image})`,
        }}
      ></Box>
      <Box className={classes.flexContainer}>
        <Box className={classes.textContainer}>
          <h1 className={classes.heading}>{data.title}</h1>
          <p className={classes.subHeading}>
            <span className={classes.spanText}>{data.subHeading}</span>
          </p>
        </Box>
      </Box>
      <div className={classes.root}>
        <div className={classes.title}>{data.exercisesDetails}</div>
        <div className={classes.text}>{data.description}</div>
      </div>

      <div className={classes.container}>
        {data.data &&
          data.data.map((item, index) => (
            <ExercisesListCard
              key={index}
              title={item.title}
              description={item.description}
              video={item.video}
            />
          ))}
      </div>
    </div>
  );
};

export default ExercisePag;

const useStyles = makeStyles((theme) => ({
  textFont: { fontFamily: "Raleway, sans-serif" },
  imageContainer: {
    padding: "230px 0px 150px 0px",

    height: "254px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: ".9",
    "&::before": {
      content: "''",
      height: "80%",
      width: "100%",
      position: "absolute",
      top: 94,
      left: 0,
      backgroundColor: "#525252",
      zIndex: -1,
      opacity: ".7",
    },
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "32px",
    letterSpacing: "3.7px",
    padding: "0px 0px 0px 10px",
  },
  subHeading: {
    fontSize: "1.25rem",
    letterSpacing: "1.8px",
    lineHeight: "36px",
  },
  spanText: {
    fontWeight: 300,
  },

  textContainer: {
    width: "100%",
    fontFamily: "Raleway, sans-serif",
    position: "absolute",
    bottom: 300,
    color: theme.palette.common.white,
    textAlign: "center",
  },

  root: {
    textAlign: "center",
    padding: "100px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "2.5px",
    lineHeight: "40px",
    color: "#525252",
  },
  text: {
    fontSize: ".875rem",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#525252",
    marginBottom: "1rem",
    letterSpacing: "1px",
    padding: "0px 80px",
  },
  container: {
    margin: "30px 0px",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
}));

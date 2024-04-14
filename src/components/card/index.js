import React from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CustomButton from "../../units/buttons";

export default function PropertiesCard({ id, name, image, price }) {
  const classes = useStyles();
  // const navigate = useNavigate();

  // const handleNavigation = (id) => {
  //   navigate(`/details/${id}`);
  // };
  return (
    <div className={classes.mainContainer}>
      <Box className={classes.inner}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: 1.25,
              width: "100%",
              height: 200,
            }}
          >
            <img
              className={classes.imageHouse}
              // src={imageUrls[0]}
              src={image}
              alt="medicineImage"
            />
          </Box>
          <Box className={classes.priceBox}>
            <Typography> PKR{Math.floor(Math.random() * 100 + 1)}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.background.footer,
              fontWeight: 900,
              fontSize: 19,
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Typography>
        </Box>

        <div className={classes.endBtn}>
          <CustomButton
            variant="contained"
            className="cartBtn"
            // onClick={() => handleNavigation(id)}
          >
            Add cart
            <AddShoppingCartIcon />
          </CustomButton>
          <CustomButton
            variant="contained"
            className="btn"
            // onClick={() => handleNavigation(id)}
          >
            Details
          </CustomButton>
        </div>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "90%",
    padding: 8,
  },
  inner: {
    padding: 15,

    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    backgroundColor: theme.palette.common.main,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    rowGap: 6,
    transition: "all .25s ease",
    cursor: "default",
    "&:hover": {
      transform: "translateY(-10px)",
      transition: "all .25s ease",
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 16px",
    },
  },
  imageHouse: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    transition: "transform .25s ease",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform .25s ease",
    },
  },

  endBtn: {
    paddingRight: 4,
    display: "flex",
    justifyContent: "space-between",
    "& .cartBtn": {
      marginTop: 10,
      width: 160,
      textTransform: "capitalize",
      fontWeight: 600,
      fontSize: 16,
    },
    "& .btn": {
      marginTop: 10,
      width: 90,
      textTransform: "capitalize",
      fontWeight: 600,
      fontSize: 16,
    },
  },

  priceBox: {
    padding: "3px 30px ",
    borderRadius: 3,
    textAlign: "center",
    position: "absolute",
    top: 8,
    right: 6,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.footer,
  },
}));

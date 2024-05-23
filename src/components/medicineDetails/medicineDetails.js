import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import backImage from "../../assets/e78bfb4b1e5c03e23238bcb45de6c008.jpg";
import Radio from "@mui/material/Radio";
import CustomButton from "../../units/buttons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const MedicineDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box
        sx={{ backgroundImage: `url(${backImage})` }}
        className={classes.imgContainer}
      >
        <Box sx={{ textAlign: "center" }}>
          <h1 className={classes.text}>Medicine Details</h1>
        </Box>
      </Box>
      <div className={classes.medicineContainer}>
        <Box>
          <img
            src="https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F565%2F14787.webp&w=256&q=50"
            alt="medicineimage"
          />
        </Box>
        <div>
          <h2>
            Augmentin Tablets 625Mg (1 Box = 1 Strip)(1 Strip = 6 Tablets)
          </h2>

          <p>
            <strong>Manufacturer:</strong>Glaxo SmithKline Pharmaceuticals Ltd
          </p>
          <Box
            display="flex"
            alignContent="center"
            justifyContent="space-around"
          >
            <Box display="flex" alignContent="center" alignItems="center">
              <div>
                <Radio /> <strong>Per box</strong>
              </div>
            </Box>

            <p>
              <strong>Price:</strong>300pkr
            </p>
          </Box>
          <Box
            display="flex"
            alignContent="center"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Box>
              <p>
                <strong>Composition:</strong>
                amoxicillin/clavulanate
              </p>
            </Box>

            <CustomButton variant="contained" className="cartBtn">
              Add cart
              <AddShoppingCartIcon />
            </CustomButton>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;

const useStyles = makeStyles((theme) => ({
  imgContainer: { fontFamily: "Bebas Neue, sans-serif" },
  medicineContainer: {
    padding: "50px",
    justifyContent: "space-evenly",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  text: {
    fontWeight: 500,
    fontSize: "60px",
    margin: 0,
    paddingTop: "30px",
    paddingBottom: "30px",
    color: theme.palette.common.white,
  },
}));

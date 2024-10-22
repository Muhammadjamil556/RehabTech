//

import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import backImage from "../../assets/e78bfb4b1e5c03e23238bcb45de6c008.jpg";
import Radio from "@mui/material/Radio";
import CustomButton from "../../units/buttons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import { useGetMedicineByIdQuery } from "../../toolkit/services/api/medicine-api";

const MedicineDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMedicineByIdQuery(id);

  if (isLoading) return <CircularProgress />;
  if (isError) return <>Error happend</>;

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
        <Box className={classes.medicineImage}>
          <Box padding="30px" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
            <img src={data?.response?.imageURL} alt="medicineimage" />
          </Box>
        </Box>
        <div>
          <h2>{data?.response?.name}</h2>

          <p>
            <strong>Manufacturer:</strong> {data?.response?.manufacturer}
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
              <strong>Price:</strong> {data?.response?.price}
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
                <strong>Composition:</strong> {data?.response?.composition}
              </p>
            </Box>

            <CustomButton variant="contained" className="cartBtn">
              Add cart
              <AddShoppingCartIcon />
            </CustomButton>
          </Box>
        </div>
      </div>

      <div className={classes.detailsContainer}>
        <h2>{data?.response?.name} Specification</h2>
        <p>
          <strong>Generics:</strong> {data?.response?.composition}
        </p>
        <p>
          <strong>Used For:</strong> {data?.response?.uses}
        </p>

        <h2>{data?.response?.name} Usage And Safety</h2>
        <p>
          <strong>Dosage:</strong> {data?.response?.composition}
        </p>
        <p>
          <strong>Side Effects:</strong> {data?.response?.sideEffects}
        </p>
      </div>
    </div>
  );
};

export default MedicineDetails;

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Arial, sans-serif",
  },
  imgContainer: {
    fontFamily: "Bebas Neue, sans-serif",
  },
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
  medicineImage: {
    transition: "1s ease",

    "&:hover ": {
      borderRadius: "50%",
      transition: "1s ease",
    },
  },
  detailsContainer: {
    margin: "30px 0px",
    padding: "0px 200px",

    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
}));

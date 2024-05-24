//

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
        <Box className={classes.medicineImage}>
          <Box padding="30px" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
            <img
              src="https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F565%2F14787.webp&w=256&q=50"
              alt="medicineimage"
            />
          </Box>
        </Box>
        <div>
          <h2>
            Augmentin Tablets 625Mg (1 Box = 1 Strip)(1 Strip = 6 Tablets)
          </h2>

          <p>
            <strong>Manufacturer:</strong> Glaxo SmithKline Pharmaceuticals Ltd
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
              <strong>Price:</strong> 300pkr
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
                <strong>Composition:</strong> amoxicillin/clavulanate
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
        <h2>Augmentin Tablets Specification</h2>
        <p>
          <strong>Requires Prescription (YES/NO):</strong> Yes
        </p>
        <p>
          <strong>Generics:</strong> Amoxicillin, Clavulanic Acid
        </p>
        <p>
          <strong>Used For:</strong> Bacterial Infection
        </p>
        <p>
          <strong>How it works:</strong> The beta-lactamase inhibitory action of
          clavulanate extends the spectrum of amoxicillin to embrace a wider
          range of organisms, including many resistant to other beta-lactam
          antibiotics.
        </p>

        <h2>Augmentin Tablets Usage And Safety</h2>
        <p>
          <strong>Dosage:</strong> Amoxicillin, Clavulanic Acid
        </p>
        <p>
          <strong>Side Effects:</strong> Mucocutaneous candidiasis, reversible
          leucopenia (including neutropenia) and thrombocytopenia, angioneurotic
          oedema, anaphylaxis, serum sickness-like syndrome, hypersensitivity
          vasculitis, dizziness, headache, diarrhoea, nausea, vomiting,
          indigestion.
        </p>
        <p>
          <strong>Drug Interactions:</strong> Mycophenolate mofetil, Probenecid,
          Oral contraceptives, acenocoumarol or warfarin.
        </p>

        <h2>Indication</h2>
        <p>
          It is an antibiotic agent with a notably broad spectrum of activity
          against the commonly occurring bacterial pathogens.
        </p>

        <h2>When not to Use</h2>
        <p>
          It is contraindicated in patients with a history of hypersensitivity
          to beta-lactams, e.g. penicillins and cephalosporins.
        </p>

        <h2>Augmentin Tablets Precautions</h2>
        <p>
          <strong>Precaution:</strong> Before initiating therapy with
          Co-Amoxiclav, careful enquiry should be made concerning previous
          hypersensitivity reactions to penicillins, cephalosporins, or other
          allergens.
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

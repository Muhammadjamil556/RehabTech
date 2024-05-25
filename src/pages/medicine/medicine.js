import React from "react";
import CardsMape from "../../components/card/cardsMape";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StaticSearchBar from "../../components/search";
import backImage from "../../assets/e78bfb4b1e5c03e23238bcb45de6c008.jpg";
import { Badge } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Medicine = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        sx={{ backgroundImage: `url(${backImage})` }}
        className={classes.container}
      >
        <Box sx={{ textAlign: "center" }}>
          <h1 className={classes.text}>Rehab Tech Pharmacy</h1>
        </Box>
      </Box>
      <Box className={classes.cardContainer}>
        <Box display="flex" justifyContent="space-between">
          <Box paddingLeft="30px">
            <h2>Search Here for medicines</h2>
          </Box>
          <Box>
            <h2>Shopping Cart details</h2>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <StaticSearchBar />
          {/* <Link to="/cart"> */}
          <Badge badgeContent={1}>
            <ShoppingCartIcon fontSize="large" className={classes.iconCart} />
          </Badge>
          {/* </Link> */}
        </Box>
        <CardsMape />
      </Box>
    </div>
  );
};

export default Medicine;

const useStyles = makeStyles((theme) => ({
  container: { fontFamily: "Bebas Neue, sans-serif" },

  cardContainer: {
    margin: "70px",
    [theme.breakpoints.down("md")]: { margin: 0 },
  },
  text: {
    fontWeight: 500,
    fontSize: "60px",
    margin: 0,
    paddingTop: "100px",
    paddingBottom: "100px",
    color: theme.palette.common.white,
  },
  iconCart: { color: theme.palette.primary.main },
}));

import React, { useState } from "react";
import PropertiesCard from "./index";
import { makeStyles } from "@mui/styles";
import { useGetAllMedicinesQuery } from "../../toolkit/services/api/medicine-api";
import {
  Box,
  CircularProgress,
  TextField,
  InputAdornment,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../toolkit/services/slices/product";
import { useNavigate } from "react-router-dom";

const CardsMape = () => {
  const { data, isLoading, isError } = useGetAllMedicinesQuery();
  const classes = useStyles();

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const cartItems = useSelector(selectCartItems);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <>Error in API</>;

  // Filter the data based on the search query
  const filteredMedicines = data.response.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for medicines"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
          className={classes.searchInput}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box paddingLeft="30px">
          <h2>Search Here for Medicines</h2>
        </Box>
        <div onClick={() => navigate("/cart")}>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Badge badgeContent={cartItems.length}>
              <ShoppingCartIcon fontSize="large" className={classes.iconCart} />
            </Badge>
            <h2>Shopping Cart Details</h2>
          </Box>
        </div>
      </Box>
      <div className={classes.container}>
        {filteredMedicines.map((item, index) => (
          <PropertiesCard key={item.id} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CardsMape;

const useStyles = makeStyles(() => ({
  searchInput: {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    transition: "box-shadow 0.3s ease",
    "&:focus-within": {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "10px",
    padding: "20px",
  },
}));

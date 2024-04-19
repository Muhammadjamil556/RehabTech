import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton, Paper } from "@mui/material";

const StaticSearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    // You can add your search logic here
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        maxWidth: "400px",
        margin: "20px",
        borderRadius: "24px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
      }}
    >
      <IconButton sx={{ p: 1 }}>
        <SearchIcon color="action" />
      </IconButton>
      <InputBase
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
        fullWidth
        sx={{
          flexGrow: 1,
          py: 1,
          "& input": {
            py: "8px",
            pr: "16px",
          },
        }}
      />
      {/* You can add a button for submitting the search query if required */}
    </Paper>
  );
};

export default StaticSearchBar;

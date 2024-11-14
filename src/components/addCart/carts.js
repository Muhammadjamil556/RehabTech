import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  removeFromCart,
  selectCartItems,
  updateCart,
} from "../../toolkit/services/slices/product";
import { navigate, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
    marginBottom: "40px",
  },
  image: { width: "150px", height: "100px" },
  table: {
    minWidth: 650,
  },
  totalRow: {
    fontWeight: "bold",
  },
  checkOutButton: {
    marginTop: "20px",
    backgroundColor: "#000",
    color: "#fff",
  },
  freeShippingText: {
    color: "green",
  },
  itemName: {
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: "1rem",
  },
  deleteIcon: {
    color: "#000",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
  },
  quantityButton: {
    minWidth: "30px",
    height: "30px",
  },
  totalContainer: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginTop: "20px",
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    // Ensure the price is a number and handle default cases
    const newGrandTotal = cartItems.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
    setGrandTotal(newGrandTotal);
  }, [cartItems]);

  const handleClick = () => {
    navigate("/payment", { state: { cartItems } });
  };
  const handleRemoveItem = (index) => {
    dispatch(removeFromCart(index));
  };
  const handleQuantityChange = (index, increment) => {
    const updatedItems = [...cartItems];
    const currentItem = { ...updatedItems[index] }; // Create a new copy of the item

    if (increment) {
      currentItem.quantity = (currentItem.quantity || 0) + 1; // Increment the quantity
    } else if (currentItem.quantity > 1) {
      currentItem.quantity -= 1; // Decrement the quantity
    }

    // Update the cart with the new quantity
    dispatch(updateCart({ index, quantity: currentItem.quantity })); // Use the updateCart action
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/Medicine-store");
    }
  }, [cartItems, navigate]);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Your Cart ({cartItems.length} items)
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item, index) => (
              <TableRow key={item.id}>
                {" "}
                {/* Use a unique id for key */}
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img
                        src={item.imageURL}
                        alt={item.name} // use item.name for better accessibility
                        className={classes.image}
                      />
                    </Box>
                    <Box margin="10px">
                      <Typography className={classes.itemName}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right" className={classes.itemPrice}>
                  {item.price ? item.price.toFixed(2) : "0.00"} PKR
                </TableCell>
                <TableCell align="center">
                  <Box className={classes.quantityContainer}>
                    <IconButton
                      className={classes.quantityButton}
                      onClick={() => handleQuantityChange(index, false)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{item.quantity || 1}</Typography>{" "}
                    {/* Ensure quantity is displayed properly */}
                    <IconButton
                      className={classes.quantityButton}
                      onClick={() => handleQuantityChange(index, true)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  {((item.price || 0) * (item.quantity || 1)).toFixed(2)} PKR
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    className={classes.deleteIcon}
                    onClick={() => handleRemoveItem(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6" className={classes.totalContainer}>
          Grand Total: {grandTotal.toFixed(2)} PKR
        </Typography>
        <Button
          variant="contained"
          className={classes.checkOutButton}
          onClick={handleClick}
        >
          Check out
        </Button>
      </Grid>
      <Typography variant="body1" className={classes.freeShippingText}>
        Congrats, you're eligible for Free Shipping
      </Typography>
    </Container>
  );
};

export default CartPage;

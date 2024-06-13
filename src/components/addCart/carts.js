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
  TextField,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem, updateQuantity } from "../../feature/productSlicer";

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
  estimatedShipDate: {
    color: "orange",
  },
  itemPrice: {
    fontSize: "1rem",
  },
  deleteIcon: {
    color: "#000",
  },
  textField: {
    maxWidth: "100px",
  },
  couponCodeContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "10px",
  },
  couponCode: {
    marginRight: "10px",
  },
  summaryContainer: {
    marginTop: "20px",
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartItems);

  const [subtotal, setSubtotal] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + (item.price || 0) * item.quantity,
      0
    );
    const newSalesTax = newSubtotal * 0.1;
    const newGrandTotal = newSubtotal + newSalesTax;
    console.log(cartItems);

    setSubtotal(newSubtotal);
    setSalesTax(newSalesTax);
    setGrandTotal(newGrandTotal);
  }, [cartItems]);

  const handleQuantityChange = (index, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ index, quantity }));
    }
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

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
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <Box>
                      <img
                        src={item.imageURL}
                        alt="pic"
                        className={classes.image}
                      />
                    </Box>
                    <Box margin="10px">
                      <Typography className={classes.itemName}>
                        {item.name}
                      </Typography>
                      {item.shipDate && (
                        <Typography className={classes.estimatedShipDate}>
                          (Estimated Ship Date: {item.shipDate})
                        </Typography>
                      )}
                      {item.freeItems &&
                        item.freeItems.map((freeItem, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            color="textSecondary"
                          >
                            {freeItem}
                          </Typography>
                        ))}{" "}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right" className={classes.itemPrice}>
                  {(item.price || 0).toFixed(2)} PKR
                </TableCell>
                <TableCell align="center">
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value, 10))
                    }
                    className={classes.textField}
                    InputProps={{ inputProps: { min: 1 } }}
                  />
                </TableCell>
                <TableCell align="right">
                  {((item.price || 0) * item.quantity).toFixed(2)} PKR
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
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2} className={classes.totalRow}>
                Subtotal
              </TableCell>
              <TableCell align="right">{subtotal.toFixed(2)} PKR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className={classes.totalRow}>
                Sales Tax
              </TableCell>
              <TableCell align="right">{salesTax.toFixed(2)} PKR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className={classes.totalRow}>
                Grand Total
              </TableCell>
              <TableCell align="right">{grandTotal.toFixed(2)} PKR</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.summaryContainer}
      >
        <Typography variant="body1" className={classes.freeShippingText}>
          Congrats, you're eligible for Free Shipping
        </Typography>
        <Button variant="contained" className={classes.checkOutButton}>
          Check out
        </Button>
      </Grid>
    </Container>
  );
};

export default CartPage;

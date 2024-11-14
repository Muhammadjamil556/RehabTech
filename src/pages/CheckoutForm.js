import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Button, CircularProgress, Typography, TextField } from "@mui/material";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { Box } from "@mui/material";
import { navigate, useNavigate, useLocation } from "react-router-dom";

import { Paper } from "@mui/material";
import { Grid } from "@mui/material";

// Load your Stripe public key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate total amount from cartItems
  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (grandTotal > 0) {
      const fetchClientSecret = async () => {
        try {
          const response = await axios.post(
            "http://localhost:8000/api/create-payment-intent",
            { amount: grandTotal * 100 } // Convert to cents
          );

          if (response.data.clientSecret) {
            setClientSecret(response.data.clientSecret);
          } else {
            toast.error("Failed to fetch payment details.");
          }
        } catch (error) {
          console.error("Error fetching client secret", error);
          toast.error(
            "Error fetching payment details. Please try again later."
          );
        }
      };

      fetchClientSecret();
    }
  }, [grandTotal]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      toast.error("Stripe is not ready or client secret is missing!");
      return;
    }

    setIsProcessing(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: { card: cardElement },
      }
    );

    if (error) {
      console.error("Payment failed:", error);
      toast.error(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === "succeeded") {
      toast.success("Payment succeeded! Thank you for your purchase!");
      navigate("/payment-success");
    }

    setIsProcessing(false);
  };

  return (
    <Box display="flex" height="100vh" alignItems="center">
      <Box p={3} maxWidth="800px" margin="auto">
        <Typography variant="h4" gutterBottom>
          Review Your Order
        </Typography>

        {/* Display cart items */}
        <Paper variant="outlined" sx={{ padding: 2, marginBottom: 3 }}>
          {cartItems.map((item, index) => (
            <Grid container spacing={2} key={index} alignItems="center">
              <Grid item xs={3}>
                <img src={item.imageURL} alt={item.name} width="100%" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">
                  {item.price.toFixed(2)} USD
                </Typography>
                <Typography variant="body2">
                  Quantity: {item.quantity}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" align="right">
                  {(item.price * item.quantity).toFixed(2)} USD
                </Typography>
              </Grid>
            </Grid>
          ))}

          <Typography variant="h5" align="right" sx={{ marginTop: 2 }}>
            Grand Total: {grandTotal.toFixed(2)} USD
          </Typography>
        </Paper>

        <Typography variant="h5" gutterBottom>
          Payment Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <CardElement options={{ hidePostalCode: true }} />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isProcessing || !stripe || !clientSecret}
            fullWidth
          >
            {isProcessing ? <CircularProgress size={24} /> : "Pay Now"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [amount, setAmount] = useState(""); // State for the amount

//   useEffect(() => {
//     if (amount > 0) {
//       // Fetch client secret whenever amount changes and is valid
//       const fetchClientSecret = async () => {
//         try {
//           // toast.info("Fetching payment details..."); // Show a toast indicating we're fetching data

//           const response = await axios.post(
//             "http://localhost:8000/api/create-payment-intent",
//             { amount: amount * 100 } // Convert dollars to cents
//           );

//           if (response.data.clientSecret) {
//             setClientSecret(response.data.clientSecret);
//             // toast.success("Payment details fetched successfully!"); // Success toast
//           } else {
//             // toast.error("Failed to fetch payment details.");
//           }
//         } catch (error) {
//           console.error("Error fetching client secret", error);
//           toast.error(
//             "Error fetching payment details. Please try again later."
//           ); // Error toast
//         }
//       };

//       fetchClientSecret();
//     }
//   }, [amount]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error("Stripe is not ready or client secret is missing!");
//       return;
//     }

//     setIsProcessing(true);

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: cardElement,
//         },
//       }
//     );

//     if (error) {
//       console.error("Payment failed:", error);
//       toast.error(`Payment failed: ${error.message}`); // Error toast
//     } else if (paymentIntent.status === "succeeded") {
//       console.log("Payment succeeded:", paymentIntent);
//       toast.success("Payment succeeded! Thank you for your purchase!"); // Success toast
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <div
//       style={{
//         maxWidth: 400,
//         margin: "auto",
//         display: "flex",
//         height: "100vh",
//         alignItems: "center",
//       }}
//     >
//       <Box
//         style={{
//           width: "100%",
//           margin: "auto",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Complete Payment
//         </Typography>

//         {/* Input for amount */}
//         <TextField
//           label="Amount (USD)"
//           variant="outlined"
//           fullWidth
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           type="number"
//           margin="normal"
//           required
//         />

//         <form onSubmit={handleSubmit}>
//           <CardElement options={{ hidePostalCode: true }} />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={isProcessing || !stripe || !clientSecret || amount <= 0}
//             fullWidth
//             style={{ marginTop: "20px" }}
//           >
//             {isProcessing ? <CircularProgress size={24} /> : "Pay Now"}
//           </Button>
//         </form>
//       </Box>
//     </div>
//   );
// };

const StripeContainer = () => {
  const location = useLocation();
  const { cartItems } = location.state || {}; // Get cartItems from state

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm cartItems={cartItems} />
    </Elements>
  );
};

export default StripeContainer;

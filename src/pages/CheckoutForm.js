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

// Load your Stripe public key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [amount, setAmount] = useState(""); // State for the amount

  useEffect(() => {
    if (amount > 0) {
      // Fetch client secret whenever amount changes and is valid
      const fetchClientSecret = async () => {
        try {
          toast.info("Fetching payment details..."); // Show a toast indicating we're fetching data

          const response = await axios.post(
            "http://localhost:8000/api/create-payment-intent",
            { amount: amount * 100 } // Convert dollars to cents
          );

          if (response.data.clientSecret) {
            setClientSecret(response.data.clientSecret);
            toast.success("Payment details fetched successfully!"); // Success toast
          } else {
            toast.error("Failed to fetch payment details.");
          }
        } catch (error) {
          console.error("Error fetching client secret", error);
          toast.error(
            "Error fetching payment details. Please try again later."
          ); // Error toast
        }
      };

      fetchClientSecret();
    }
  }, [amount]);

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
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      console.error("Payment failed:", error);
      toast.error(`Payment failed: ${error.message}`); // Error toast
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded:", paymentIntent);
      toast.success("Payment succeeded! Thank you for your purchase!"); // Success toast
    }

    setIsProcessing(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Complete Payment
      </Typography>

      {/* Input for amount */}
      <TextField
        label="Amount (USD)"
        variant="outlined"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        margin="normal"
        required
      />

      <form onSubmit={handleSubmit}>
        <CardElement options={{ hidePostalCode: true }} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isProcessing || !stripe || !clientSecret || amount <= 0}
          fullWidth
          style={{ marginTop: "20px" }}
        >
          {isProcessing ? <CircularProgress size={24} /> : "Pay Now"}
        </Button>
      </form>
    </div>
  );
};

const StripeContainer = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeContainer;

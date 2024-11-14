import { Box, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function PaymentSuccess() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        height: "100vh",
      }}
    >
      <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "green", mb: 2 }} />
      <Typography variant="h4" component="h1" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ mb: 3, textAlign: "center" }}
      >
        Thank you for your purchase! Your payment has been processed
        successfully.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        href="/" // Replace with the appropriate route if needed
      >
        Back to Home
      </Button>
    </Box>
  );
}

export default PaymentSuccess;

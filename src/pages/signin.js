import React, { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios for API requests
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  // Validation schema for form fields
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  // Submit handler
  const handleSubmit = async (values) => {
    try {
      setLoading(true); // Start loading

      // API request to login (replace with your actual API URL)
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/login`,
        values
      );

      const { accessToken, user } = response.data;

      // Store access token and user in localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(`Welcome back, ${user.name}!`); // Success message

      navigate("/");

      // Delay the page reload by 2 seconds (2000 ms)
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      ); // Error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form>
              <Box sx={{ mt: 1 }}>
                {/* Email Field */}
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      style={{ color: "red" }}
                    />
                  }
                />

                {/* Password Field */}
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="span"
                      style={{ color: "red" }}
                    />
                  }
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <ToastContainer /> {/* Toast Notifications */}
    </Container>
  );
};

export default SignIn;

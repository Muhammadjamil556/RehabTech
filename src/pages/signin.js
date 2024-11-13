import React, { useState } from "react";
import { Button, TextField, Typography, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = form;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/login`,
        form
      );
      const { accessToken, user } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success(`Welcome back, ${user.name}!`);
      navigate("/");
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!form.email) {
      toast.error("Please enter your email.");
      return;
    }
    try {
      await axios.post("http://localhost:8000/api/v1/forgot-password", {
        email: form.email,
      });
      toast.success("Password reset link sent to your email.");
    } catch (err) {
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          padding: 16,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" style={{ color: "#fff", marginBottom: 16 }}>
          Sign In To Rehab Tech
        </Typography>
        <Typography style={{ color: "#aaa", marginBottom: 16 }}>
          Fill in the fields below to sign in
        </Typography>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
          />
          {!isForgotPassword && (
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={form.password}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <Typography variant="body2" style={{ color: "#aaa", marginTop: 16 }}>
          By clicking sign in, you agree to our{" "}
          <Link to="#" style={{ color: "#fff", textDecoration: "underline" }}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="#" style={{ color: "#fff", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          .
        </Typography>

        <Link
          to="/signup"
          style={{ color: "red", textDecoration: "none", marginTop: 8 }}
        >
          <Typography variant="body2">
            Don't have an account? Sign Up
          </Typography>
        </Link>

        <button
          style={{ marginTop: 16 }}
          onClick={() => setIsForgotPassword(true)}
        >
          Forget Password
        </button>

        {isForgotPassword && (
          <div>
            <Typography style={{ color: "#fff", marginTop: 16 }}>
              Enter your email to reset your password
            </Typography>
            <TextField
              id="forgot-email"
              name="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleForgotPassword}
              style={{ marginTop: 16 }}
            >
              Send Reset Link
            </Button>
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default SignIn;

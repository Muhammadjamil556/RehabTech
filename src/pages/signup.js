import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const { email, password, confirmPassword } = form;

    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    // Password and confirm password check
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    // Check password length
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return false;
    }

    if (!avatar) {
      toast.error("Please upload a picture.");
      return false;
    }

    // Check avatar size
    if (avatar && avatar.size > MAX_FILE_SIZE) {
      toast.error("Avatar file size should not exceed 2MB.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("confirmPassword", form.confirmPassword);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/register`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("Registration Successful");
      navigate("/signin");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "There was a problem with your request."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(file);

      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
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
          Create your account
        </Typography>
        <Typography style={{ color: "#aaa", marginBottom: 16 }}>
          Fill in the fields below to sign up
        </Typography>

        {/* Avatar Upload */}
        <div style={{ marginBottom: 16 }}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="avatarInput"
            type="file"
            onChange={handleAvatarChange}
          />
          <label htmlFor="avatarInput" style={{ cursor: "pointer" }}>
            <Avatar
              src={avatarPreview || "https://github.com/shadcn.png"}
              alt="Avatar Preview"
              sx={{ width: 96, height: 96, margin: "0 auto" }}
            />
          </label>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <TextField
            id="name"
            name="name"
            label="Your Name"
            value={form.name}
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
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={form.confirmPassword}
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
              "Sign Up"
            )}
          </Button>
        </form>

        <Typography variant="body2" style={{ color: "#aaa", marginTop: 16 }}>
          By clicking sign up, you agree to our{" "}
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
          to="/signin"
          style={{ color: "red", textDecoration: "none", marginTop: 8 }}
        >
          <Typography variant="body2">
            Already have an account? Login
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

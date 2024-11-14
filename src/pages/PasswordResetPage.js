import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  container: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  },
  heading: {
    marginBottom: 20,
    fontSize: 24,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    padding: 10,
    fontSize: 16,
    backgroundColor: "#333",
    color: "white",
    border: "1px solid #444",
    borderRadius: 5,
    "&:focus": {
      outline: "none",
      borderColor: "#6c63ff",
    },
  },
  button: {
    padding: 12,
    backgroundColor: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: 5,
    fontSize: 16,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#5751e5",
    },
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
}));

const PasswordResetPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      return setError(
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    }

    if (newPassword !== confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/password-reset/${token}`,
        {
          password: newPassword,
          confirmPassword: confirmPassword,
        }
      );

      console.log("API Response:", response.data);
      if (response.data.message === "Password has been reset successfully") {
        setError(""); // Clear any existing error
        toast.success(response.data.message, {
          onClose: () => navigate("/"),
          autoClose: 2000,
        });
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred, please try again later");
      console.error("Password reset error:", err);
    }
  };

  return (
    <div className={classes.root}>
      <ToastContainer /> {/* Toast container for displaying notifications */}
      <div className={classes.container}>
        <h2 className={classes.heading}>Reset Your Password</h2>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className={classes.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={classes.input}
          />
          {error && <div className={classes.error}>{error}</div>}
          <button type="submit" className={classes.button}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetPage;

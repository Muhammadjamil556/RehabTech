import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // If you're using React Router
import axios from "axios"; // Import axios

const PasswordResetPage = () => {
  const { token } = useParams(); // Capture the token from the URL
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Optionally, you can verify if the token is valid by making a request to your API
    // Example: fetch(`/api/verify-reset-token/${token}`)
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/password-reset/${token}`,
        {
          password: newPassword, // Send the new password
          confirmPassword: confirmPassword, // Send the confirm password
        }
      );

      if (response.data.success) {
        setSuccess(true);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred, please try again later");
      console.error("Password reset error:", err);
    }
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      {success ? (
        <div>
          Password reset successfully! You can now log in with your new
          password.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default PasswordResetPage;

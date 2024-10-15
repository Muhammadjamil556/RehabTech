import { useState, useEffect } from "react";

// Custom hook to get user authentication details from localStorage
const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Retrieve and parse the user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    }
  }, []);

  return user;
};

export default useAuth;

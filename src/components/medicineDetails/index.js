import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const MedicineDetailPage = () => {
  const { id } = useParams(); // Accessing the id parameter
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching medicine details from an API
    const fetchMedicine = async () => {
      try {
        // Fetch medicine details using the id
        const response = await fetch(`/api/medicines/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch medicine");
        }
        const data = await response.json();
        setMedicine(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching medicine:", error);
        setLoading(false);
      }
    };

    fetchMedicine();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!medicine) {
    return <div>Medicine not found</div>;
  }

  return (
    <div>
      <h1>{medicine.name}</h1>
      <p>
        <strong>Generic Name:</strong> {medicine.genericName}
      </p>
      <p>
        <strong>Description:</strong> {medicine.description}
      </p>
      <p>
        <strong>Manufacturer:</strong> {medicine.manufacturer}
      </p>
      <p>
        <strong>Price:</strong> ${medicine.price}
      </p>
      <p>
        <strong>Stock:</strong> {medicine.stock}
      </p>
      <p>
        <strong>Expiry Date:</strong> {medicine.expiryDate}
      </p>
      {/* Add more details here */}
    </div>
  );
};

export default MedicineDetailPage;

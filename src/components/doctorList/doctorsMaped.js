// src/App.js

import React from "react";
import { Container } from "@mui/material";
import ProfileCard from "./profileCard";
import doctorsData from "./data";

function Doctors() {
  return (
    <Container maxWidth="md">
      {doctorsData.map((doctor) => (
        <ProfileCard
          key={doctor.id}
          name={doctor.name}
          title={doctor.title}
          qualification={doctor.qualification}
          experience={doctor.experience}
          image={doctor.image}
        />
      ))}
    </Container>
  );
}

export default Doctors;

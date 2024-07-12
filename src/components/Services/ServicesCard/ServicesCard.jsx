import React from "react";
import "./services-card.css";

export const ServicesCard = ({ title, description, gpa, year }) => {
  return (
    <div className="services-card">
      <h2>{title}</h2>
      <h4>{description}</h4>
      <br />
      <h6>
        Year: {year} {gpa && `, GPA: ${gpa}`}
      </h6>
      <br />
    </div>
  );
};

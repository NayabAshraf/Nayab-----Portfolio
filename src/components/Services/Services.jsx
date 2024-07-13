import React from "react";

// Styles
import "./services.css";

// Card
import { ServicesCard } from "./ServicesCard/ServicesCard";
import { Heading } from "../Heading/Heading";

const Services = ({ services }) => {
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      name="services"
      id="services"
    >
      <Heading text="Education & Training" />
      <div className="services-cards">
        {services &&
          services?.map(({ title, tags, description, gpa, year }, index) => (
            <ServicesCard
              key={index}
              tags={tags}
              gpa={gpa}
              year={year}
              title={title}
              description={description}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./portfolio.css";
import { Heading } from "components/Heading/Heading";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = ({ projects }) => {
  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="portfolio"
      id="portfolio"
    >
      <Heading text="Skills" style={{ padding: "3rem" }} />
      <div className="list">
        {projects &&
          projects.map((list, id) => (
            <PortfolioItem
              id={id}
              key={id}
              title={list?.title}
            />
          ))}
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";

// Styles
import "./portfolio-item.css";

const PortfolioItem = ({ title }) => {
  return <div className={"portfolio-item"}>{title}</div>;
};

export default PortfolioItem;

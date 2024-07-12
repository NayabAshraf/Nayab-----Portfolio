import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div></div>
      <div className="copywrite-section">
        <p>
          © 2024. Designed with a cup of{" "}
          <span role="img" aria-label="Coffee">
            ☕
          </span>{" "}
          . All right reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;

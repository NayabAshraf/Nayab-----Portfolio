import React from "react";
import "./menu.css";
// Router
import { NavLink } from "components/Nav/NavLink/NavLink";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="Education"
          path="services"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Skills"
          path="portfolio"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};

export default Menu;
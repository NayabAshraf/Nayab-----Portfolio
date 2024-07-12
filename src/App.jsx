import React, { useEffect, useState } from "react";

// Components
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import Menu from "components/Menu/Menu";
import Portfolio from "components/Portfolio";
import Footer from "components/Footer/Footer";
import Services from "components/Services/Services";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState([
    { title: "HTML" },
    { title: "CSS" },
    { title: "Java" },
    { title: "Python" },
    { title: "MS Office" },
    { title: "Bootstrap" },
  ]);
  const [services, setServices] = useState([
    {
      gpa: "3.73",
      title: "National University of Modern Languages",
      year: "2021 - 2025",
      description: "Bachelor of Science in Computer Science",
    },
    {
      title: "University of Michigan - Coursera",
      year: "2023",
      description: "Basics of Python",
    },
  ]);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Footer />
    </div>
  );
}

export default App;

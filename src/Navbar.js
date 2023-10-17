import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Link to="/"></Link> */}
      <Link to="/home" className="link">
        HOME
      </Link>
      <Link to="/skils" className="link">
        {" "}
        SKILS
      </Link>
      <Link to="/projects" className="link">
        PROJECTS
      </Link>
      <Link to="/about" className="link">
        ABOUT
      </Link>
    </div>
  );
};

export default Navbar;

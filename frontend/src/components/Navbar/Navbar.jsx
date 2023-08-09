import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContent">
        <div className="name">
          <h1>Carl Hammarling</h1>
        </div>
        <nav>
        <i className="dropDownBtn fa-solid fa-bars fa-lg"></i>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("navbar rendered");
  return (
    <nav className="navbar navbar-light">
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;

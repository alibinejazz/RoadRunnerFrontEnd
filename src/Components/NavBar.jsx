import React from "react";
import logo from "./logo.png";

export const NavBar = () => {
  return (
    <div>
      <nav
        data-testid="logo"
        class="navbar navbar-expand-lg navbar-dark dark"
        style={{ justifyContent: "center" }}
      >
        <img src={logo} alt="nav" width="200px" />
      </nav>
    </div>
  );
};

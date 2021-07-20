import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
            <NavLink to="/snacks">Snacks</NavLink>
            <NavLink to="/drinks">Drinks</NavLink>
            <NavLink to="/newItem">New Item</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

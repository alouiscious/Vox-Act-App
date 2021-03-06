import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  marginRight: "10px",
  borderBottom: "2px solid black",
  paddingBottom: "10px",
  marginBottom: "12px",
  margin: "0 6px 6px",
  background: "crimson",
  textDecoration: "none",
  color: "brown",
  style: "bold",
};

const Navbar = () => {
  const location = useLocation();

  switch (location.pathname.length) {
    case 1 :
      return  <div className="navBar">
        <NavLink
          style={{ link, marginRight: "10px" }}
          activeStyle={{ background: "crimson" }}
          to="/VoxActSignUp"
        >
          Sign Up
        </NavLink>
      </div>
      
    
    case (location.pathname.length >= 2):
      return (<NavLink
          style={{ link, marginRight: "10px" }}
          activeStyle={{ background: "crimson" }}
          to="/users"
        >
          Client List
        </NavLink>)
      
       ( <NavLink
          style={{ link, marginRight: "10px" }}
          activeStyle={{ background: "crimson" }}
          to="/user"
        >
          Sign Out
        </NavLink>)
    
    case 0 :
      return  (<NavLink
          style={{ link, marginRight: "10px" }}
          activeStyle={{ background: "crimson" }}
          to="/"
        >
          Sign In
        </NavLink>)
    default:
      return  (<NavLink
        style={{ link, marginRight: "10px" }}
        activeStyle={{ background: "crimson" }}
        to="/"
      >
        Sign In
      </NavLink>)

  }
  
  
  
}


export default Navbar;

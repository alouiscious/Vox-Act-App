import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  marginRight: '10px',
  borderBottom: '2px solid black', 
  paddingBottom: '10px', 
  marginBottom: '12px' ,
  // margin: '0 6px 6px',
  background: 'brown',
  textDecoration: 'none',
  color: 'brown',
}

const NavBar = () => {
  return (
    <div >
      <NavLink 
        style={link}
        activeStyle={{ background: 'darkblue'}}      
        to="/"
      >
        Home
      </NavLink>

      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/users"
      >
        Users
      </NavLink>
    </div>
  );
}

export default NavBar;
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

const Navbar = () => {
  return (
    <div >
      <NavLink 
        style={link}
        activeStyle={{ background: 'darkblue'}}      
        to="/"
      >
        Sign In
      </NavLink>

      <NavLink 
        style={{ link, marginRight: '10px' }} 
        activeStyle={{ background: 'darkblue'}}      
        to="/users"
      >
        Client List
      </NavLink>
      <NavLink
        style={{ link, marginRight: '10px' }} 
        activeStyle={{ background: 'darkblue'}}      
        to="/users"
      >
        Sign Out
      </NavLink>
    </div>
  );
}

export default Navbar;
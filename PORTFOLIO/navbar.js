import { Paper } from "@mui/material";
import React from "react";

import { NavHashLink as NavLink } from "react-router-hash-link";

const Navbar = ({ menus, isActive }) => {
  // useEffect(()=>{console.log(isActive)},[isActive])
  return (
    <Paper elevation={24} className="navbar-container">
      <ul className="navbarWrapper">
        {menus.map((menu) => (
          <li key={menu.id}>
            <NavLink
              className={isActive === menu.id ? "navLink selected" : "navLink"}
              activeClassName="selected"
              smooth
              to={`#${menu.id}`}
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItem = ({ route }) => {
 return (
  <>
   <li key={route.path}>
    <NavLink
     to={route.path}
     exact={route.exact}
     className="nawLink"
     activeClassName="nawLinkActive"
    >
     {route.name}
    </NavLink>
   </li>
  </>
 );
};

export default HeaderItem;

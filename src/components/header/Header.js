import React from "react";
import { mainRoutes } from "../../routes/mainRouters";
import HeaderItem from "./headerItem/HeaderItem";

import { HeaderConteinerStyled } from "./HeaderStyled";

const Header = () => {
 return (
  <HeaderConteinerStyled>
   <ul className="headerConteiner">
    {mainRoutes.map((route) => (
     <HeaderItem route={route} />
    ))}
   </ul>
  </HeaderConteinerStyled>
 );
};

export default Header;

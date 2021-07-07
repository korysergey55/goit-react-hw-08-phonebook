import React from "react";
import { mainRoutes } from "../../routes/mainRouters";
import HeaderItem from "./headerItem/HeaderItem";
import { connect } from "react-redux";

import { HeaderConteinerStyled } from "./HeaderStyled";
import { isAuthSelector } from "../../redux/auth/authSelectors";
import { logoutUserAction } from "../../redux/auth/authActions";

const Header = ({ isAuth, logout }) => {
 return (
  <HeaderConteinerStyled>
   <ul className="headerConteiner">
    {mainRoutes.map((route) => (
     <HeaderItem route={route} />
    ))}
    {isAuth && (
     <li onClick={logout}>
      <span>LogOut</span>
     </li>
    )}
   </ul>
  </HeaderConteinerStyled>
 );
};

const mapStateToProps = (state, ownProps) => ({
 isAuth: isAuthSelector(state),
});

const mapDispatchToProps = {
 logout: logoutUserAction,
};

export default connect( mapStateToProps,mapDispatchToProps)(Header);

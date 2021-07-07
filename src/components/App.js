import React from "react";
import Header from "./header/Header";

import { Switch, Route } from "react-router";
import { mainRoutes } from "../routes/mainRouters";

const App = () => {
 return (
  <>
   <Header />
   <Switch>
    {mainRoutes.map((route) => (
     <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
      rey={route.path}
     />
    ))}
   </Switch>
  </>
 );
};

export default App;

import React from "react";
import Section from "./sectipon/Section";
import ContactList from "./contactList/ContactList";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
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
   {/* 
   <Section title={"Phonebook"}>
    <ContactForm />
   </Section>

   <Section title={"Contacts"}>
    <Filter />

    <ContactList />
   </Section> */}
  </>
 );
};
export default App;


import ContactFormPage from '../pages/ContactFormPage';
import ContactListPage from "../pages/ContactListPage";


export const mainRoutes = [
 {
  name: "Phonebook",
  path: "/",
  component: ContactFormPage,
  exact: true,
  isLink: true,
  isPrivate: false,
  isRestricted: false,
 },
 {
  name: "Contacts",
  path: "/contacts",
  component: ContactListPage,
  exact: true,
  isLink: true,
  isPrivate: false,
  isRestricted: false,
 },
 {
  name: "Registration",
  path: "/registration",
  component: "",
  exact: true,
  isLink: true,
  isPrivate: false,
  isRestricted: false,
 },
 {
  name: "Login",
  path: "/login",
  component: "",
  exact: true,
  isLink: true,
  isPrivate: false,
  isRestricted: false,
 },
];
import axios from "axios";
const BASE_URL = "https://connections-api.herokuapp.com";

export const registrationApi = async (user) => {
 try {
  const response = await axios.post(`${BASE_URL}/users/signup`, {
   ...user,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const loginApi = async (user) => {
 try {
  const response = await axios.post(`${BASE_URL}​/users/login`, {
   ...user,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const logoutApi = async (token) => {
 try {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  const response = await axios.post(`${BASE_URL}​/users/logout`);
  return response;
 } catch (error) {
  console.log(error);
 }
};

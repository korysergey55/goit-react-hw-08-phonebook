import axios from "axios";

export const registrationApi = async (user) => {
 try {
  const response = await axios.post(`https://connections-api.herokuapp.com/`, {
   ...user,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const loginApi = async (user) => {
 try {
  const response = await axios.post(`https://connections-api.herokuapp.com/`, {
   ...user,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

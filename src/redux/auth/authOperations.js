
import { registrationApi, loginApi } from "../../servises/authApi";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
} from "./authActions";

export const registrationOperation = (user) => async (dispatch) => {
 try {
  const response = await registrationApi(user);
  dispatch(registerUserAction(response));
 } catch (error) {
  dispatch(registerUserActionError(error));
 }
};

export const loginOperation = (user) => async (dispatch) => {
 try {
  const response = await loginApi(user);
  dispatch(loginUserAction(response));
 } catch (error) {
  dispatch(loginUserActionError(error));
 }
};

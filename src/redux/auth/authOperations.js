
import { registrationApi, loginApi, logoutApi } from "../../servises/authApi";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
 logoutUserActionError,
} from "./authActions";

export const registrationOperation = (user) => async (dispatch,) => {
 try {
  const response = await registrationApi(user);
  dispatch(registerUserAction(response.data));
 } catch (error) {
  dispatch(registerUserActionError(error));
 }
};

export const loginOperation = (user) => async (dispatch) => {
 try {
  const response = await loginApi(user);
  dispatch(loginUserAction(response.data));
 } catch (error) {
  dispatch(loginUserActionError(error));
 }
};


export const logoutOperation = () => async (dispatch, getState) => {
    const token = getState().auth.token
 try {
  const response = await logoutApi(token);
  dispatch(logoutUserAction(response.data));
 } catch (error) {
  dispatch(logoutUserActionError(error));
 }
};

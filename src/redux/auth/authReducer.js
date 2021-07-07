import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit"; 
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
 logoutUserActionError,
} from "./authActions";

const authItemReducer = createReducer(null, {
 [registerUserAction]: (state, action) => action.payload,
 [loginUserAction]: (state, action) => action.payload,
 [logoutUserAction]: (state, action) => null,
});

const errorItemReducer = createReducer(null, {
 [registerUserActionError]: (state, action) => action.payload,
 [loginUserActionError]: (state, action) => action.payload,
 [logoutUserActionError]: (state, action) => action.payload,
});

const authReducer = combineReducers({
 auth: authItemReducer,
 error: errorItemReducer,
});
export default authReducer;


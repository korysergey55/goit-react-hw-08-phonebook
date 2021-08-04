import {combineReducers} from 'redux';
import contactFormReducer from '../redux/contactForm/contactFormReducer';
import authReducer from './auth/authReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ----------persist-----------------

const persistContactsConfig = {
 key: "contacts",
 storage,
 whitelist: ["items"],
};

const persistAuthConfig = {
 key: "auth",
 storage,
 whitelist: ["token","user"],
};

const rootReducer = combineReducers({
 contacts: persistReducer(persistContactsConfig, contactFormReducer),
 auth: persistReducer(persistAuthConfig, authReducer),
});

export default rootReducer;

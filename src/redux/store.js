import rootReducer from "./rootReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import {
 FLUSH,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
 REHYDRATE,
} from "redux-persist/es/constants";

// ----------persist-----------------

const middleware = [
 ...getDefaultMiddleware({
  serializableCheck: {
   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
 }),
 logger,
];

const store = configureStore({
 reducer: rootReducer,
 devTools: process.env.NODE_ENV === "development",
 middleware,
});

const persistor = persistStore(store);

export { store, persistor };

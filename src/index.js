import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import {persistor, store} from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

ReactDOM.render(
 <React.StrictMode>
  <Provider store={store}>
   <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </PersistGate>
  </Provider>
 </React.StrictMode>,
 document.getElementById("root")
);

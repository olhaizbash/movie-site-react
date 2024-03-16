import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Normalize } from "styled-normalize";
import { store, persistor } from "./redux/store.js";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Theme from "./components/Theme/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <PersistGate loading={<Loader />} persistor={persistor}>
          <BrowserRouter basename="/movie-site-react">
            <Normalize />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Theme>
    </Provider>
  </React.StrictMode>
);

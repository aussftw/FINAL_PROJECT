import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes/Routes";
import { store, persistor } from "./store";
import theme from "./theme";
import "./index.css";
// import Header from './components/Header';
// import SubHeader from './components/Header/SubHeader';
// import BackToTop from './components/common/GoUpButton';
// import Footer from './components/Footer';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  // eslint-disable-next-line
  document.getElementById("root")
);

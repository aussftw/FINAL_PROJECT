import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import configureStore from "./store";
import Routes from "./routes/Routes";

import theme from "./theme";

import "./index.css";
// import Header from './components/Header';
// import SubHeader from './components/Header/SubHeader';
// import BackToTop from './components/common/GoUpButton';
// import Footer from './components/Footer';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  // eslint-disable-next-line
  document.getElementById("root")
);

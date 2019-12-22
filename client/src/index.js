import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./App";

import theme from "./theme";

import "./index.css";

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,

// eslint-disable-next-line no-undef
  document.getElementById('root')



);

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "./config/theme";
import AppRoutes from "./components/routes";
import store from "./store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);

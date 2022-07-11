import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import * as serviceWorker from './serviceWorker';



//provider for coinbaseWallet
function getLibrary(provider) {
  return new Web3Provider(provider);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <style>
      {/* eslint-disable react/no-unescaped-entities */}
      @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500&display=swap');
    </style>
  </Web3ReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();

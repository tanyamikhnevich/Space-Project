import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/app";
import { PopupProvider } from "./features/popup";
import { Provider } from "react-redux";
import store from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PopupProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PopupProvider>
    </Provider>
  </React.StrictMode>
);

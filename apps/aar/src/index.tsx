import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Store } from "./shared/StoreState";

import { App } from "./components/App";

import { AppStore } from "./components/AppStore";
import { AppStoreState } from "./components/AppStore";

require("./index.css");

renderApp();

export function renderApp() {
  render(
    <div className="index-window">
      <App appStoreState={AppStore.state} />
    </div>,
    document.getElementById("root")
  );
}

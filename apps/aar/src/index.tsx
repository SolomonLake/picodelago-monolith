import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Store } from "./shared/StoreState";

import { App } from "./components/App";

import { AppStore } from "./components/AppStore";
import { AppStoreState } from "./components/AppStore";

renderApp();

export function renderApp() {
  render(
    <App appStoreState={AppStore.state} />,
    document.getElementById("root")
  );
}

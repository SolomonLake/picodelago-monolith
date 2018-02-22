import * as React from "react";
import { render } from "react-dom";

import { App } from "./components/App";

require("./index.css");

renderApp();

export function renderApp() {
  render(
    <div className="index-window">
      <App />
    </div>,
    document.getElementById("root")
  );
}

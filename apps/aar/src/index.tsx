import * as React from "react";
import { render } from "react-dom";

import { App } from "./components/App";

require("./index.css");

renderApp();

// -this must be called whenever we want to re-render the app
// -it will refresh all components, with the new states
export function renderApp() {
  render(
    <div className="index-window">
      <App />
    </div>,
    document.getElementById("root")
  );
}

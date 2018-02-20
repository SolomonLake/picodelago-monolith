import * as React from "react";

require("./App.css");
// import styles from "./App.css";

import { WorldMapPresentationalComponent } from "./WorldMap/WorldMap";

export const App = () => (
  <div className="app">
    <div>
      <WorldMapPresentationalComponent />
    </div>
  </div>
);

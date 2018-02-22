import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Store } from "./shared/StoreState";

import { App } from "./components/App";

import { AppStore, AppStoreState } from "./components/AppStore";
import { TempleStore, TempleStoreState } from "./components/Temple/TempleStore";
import {
  CharacterCreationStore,
  CharacterCreationStoreState
} from "./components/CharacterCreation/CharacterCreationStore";

export interface Stores {
  appStoreState: AppStoreState;
  templeStoreState: TempleStoreState;
  characterStoreState: CharacterCreationStoreState;
}

var stores = {
  appStoreState: AppStore.state,
  templeStoreState: TempleStore.state,
  characterStoreState: CharacterCreationStore.state
};

require("./index.css");

renderApp();

export function renderApp() {
  console.log("stores", stores);
  render(
    <div className="index-window">
      <App stores={stores} />
    </div>,
    document.getElementById("root")
  );
}

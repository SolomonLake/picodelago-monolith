import * as React from "react";

require("./App.css");

import { appStore, AppStoreState } from "./AppStore";
import { AppActionCreator } from "./AppActionCreator";

import { WorldMapViewComponent } from "./WorldMap/WorldMap";
import { TempleViewComponent } from "./Temple/Temple";

export const App = () => (
  <div className="app">
    <div className="app-top-menu">
      <button onClick={AppActionCreator.changeToWorldScreen}> World </button>
      <button onClick={AppActionCreator.changeToTempleScreen}> Temple </button>
    </div>
    <div className="app-main-screen">
      <MainScreen />
    </div>
  </div>
);

const MainScreen = () => {
  console.log("store", appStore);
  switch (appStore.state.screen) {
    case "world":
      return <WorldMapViewComponent />;
    case "temple":
      return <TempleViewComponent />;
    default:
      throw new Error("case match exhaustive");
  }
};

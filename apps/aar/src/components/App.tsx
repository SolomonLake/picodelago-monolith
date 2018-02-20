import * as React from "react";

require("./App.css");

import { AppStore } from "./AppStore";
import { AppStoreState } from "./AppStore";
import { AppActionCreator } from "./AppActionCreator";

import { WorldMapViewComponent } from "./WorldMap/WorldMap";
import { TempleViewComponent } from "./Temple/Temple";

export const App = (props: { appStoreState: AppStoreState }) => (
  <div className="app">
    <div className="app-top-menu">
      <button onClick={AppActionCreator.changeToWorldScreen}> World </button>
      <button onClick={AppActionCreator.changeToTempleScreen}> Temple </button>
    </div>
    <div className="app-main-screen">
      <MainScreen appStoreState={props.appStoreState} />
    </div>
  </div>
);

const MainScreen = (props: { appStoreState: AppStoreState }) => {
  switch (props.appStoreState.screen) {
    case "world":
      return <WorldMapViewComponent />;
    case "temple":
      return <TempleViewComponent />;
    default:
      throw new Error("case match exhaustive");
  }
};

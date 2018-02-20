import * as React from "react";

require("./App.css");

import { AppStore } from "./AppStore";
import { AppStoreState } from "./AppStore";
import { AppActionCreator } from "./AppActionCreator";

import { WorldMapPresentationalComponent } from "./WorldMap/WorldMap";

export const App = (props: { appStoreState: AppStoreState }) => (
  <div className="app">
    <button onClick={AppActionCreator.changeToWorldScreen}> World </button>
    <button onClick={AppActionCreator.changeToTempleScreen}> Temple </button>
    <MainScreen appStoreState={props.appStoreState} />
  </div>
);

const MainScreen = (props: { appStoreState: AppStoreState }) => {
  switch (props.appStoreState.screen) {
    case "world":
      return <WorldMapPresentationalComponent />;
    case "temple":
      return <div> Temple </div>;
    default:
      throw new Error("case match exhaustive");
  }
};
